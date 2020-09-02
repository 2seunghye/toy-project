<img align="right" src="https://cdn.rawgit.com/mikesamuel/template-tag-common/7f0159bda72d616af30645d49c3c9203c963c0a6/images/logo.png" alt="Sisyphus Logo">

# Web Contract Types

[![Build Status](https://travis-ci.org/mikesamuel/web-contract-types.svg?branch=master)](https://travis-ci.org/mikesamuel/web-contract-types)
[![Dependencies Status](https://david-dm.org/mikesamuel/web-contract-types/status.svg)](https://david-dm.org/mikesamuel/web-contract-types)
[![npm](https://img.shields.io/npm/v/web-contract-types.svg)](https://www.npmjs.com/package/web-contract-types)
[![Coverage Status](https://coveralls.io/repos/github/mikesamuel/web-contract-types/badge.svg?branch=master)](https://coveralls.io/github/mikesamuel/web-contract-types?branch=master)
[![Install Size](https://packagephobia.now.sh/badge?p=web-contract-types)](https://packagephobia.now.sh/result?p=web-contract-types)
[![Known Vulnerabilities](https://snyk.io/test/github/mikesamuel/web-contract-types/badge.svg?targetFile=package.json)](https://snyk.io/test/github/mikesamuel/web-contract-types?targetFile=package.json)

Security contract types for common web application languages: HTML, JavaScript, URLs.

<!-- scripts/make-md-toc.pl replaces the below and test/check-markdown.js keeps this up-to-date. -->

<!-- TOC -->

*  [Installation](#hdr-installation)
*  [Configuration](#hdr-configuration)
   *  [For applications](#hdr-for-applications)
   *  [For library authors](#hdr-for-library-authors)
*  [Contracts](#hdr-contracts)
   *  [TrustedHTML](#hdr-trustedhtml)
   *  [TrustedResourceURL](#hdr-trustedresourceurl)
   *  [TrustedScript](#hdr-trustedscript)
   *  [TrustedURL](#hdr-trustedurl)
*  [Creating Trusted values](#hdr-creating-trusted-values)
*  [Verifying Trusted values](#hdr-verifying-trusted-values)
*  [API](#hdr-api)
   *  [class TrustedHTML](#hdr-class-trustedhtml)
   *  [TrustedHTML.concat](#hdr-trustedhtml-concat)
   *  [TrustedHTML.empty](#hdr-trustedhtml-empty)
   *  [TrustedHTML.escape](#hdr-trustedhtml-escape)
   *  [TrustedHTML.fromScript](#hdr-trustedhtml-fromscript)
   *  [class TrustedResourceURL](#hdr-class-trustedresourceurl)
   *  [TrustedResourceURL.fromScript](#hdr-trustedresourceurl-fromscript)
   *  [class TrustedScript](#hdr-class-trustedscript)
   *  [TrustedScript.expressionFromJSON](#hdr-trustedscript-expressionfromjson)
   *  [class TrustedURL](#hdr-class-trustedurl)
   *  [TrustedURL.innocuousURL](#hdr-trustedurl-innocuousurl)
   *  [TrustedURL.sanitize](#hdr-trustedurl-sanitize)

<!-- /TOC -->

## Installation                        <a name="hdr-installation"></a>

```bash
$ npm install web-contract-types
```

## Configuration                       <a name="hdr-configuration"></a>

### For applications                   <a name="hdr-for-applications"></a>

These types are [Mintable][] so the application's main module should do some
setup to guard which modules can create values that meet a contract.

This helps an application team, in conjunction with security specialists,
keep a bound on how much code needs review to check that contracts hold.

The applications main file should do, as early as possible, something like:

```js
// In application main file.
require('node-sec-patterns').authorize(require('./package.json'));
```

which opts into access checks for mintable type constructors, and
tells it to use the "mintable" property of `./package.json` to
determine which modules may create which contract types.

The APIs below require access to the module's own minters, so the
minimal additions to package.json are

```json
{
  ...
  "mintable": {
    "grants": {
      "web-contract-types/TrustedHTML": [ "web-contract-types" ],
      "web-contract-types/TrustedResourceURL": [ "web-contract-types" ],
      "web-contract-types/TrustedScript": [ "web-contract-types" ],
      "web-contract-types/TrustedURL": [ "web-contract-types" ]
    }
  }
}
```

This says "this application trusts module web-contract-types to mint values
that meet the contracts "web-contract-types/TrustedHTML", etc.  This relies
on the fact that `class TrustedHTML` has a static `contractKey` property with
the value `"web-contract-types/TrustedHTML"`.

This can be a bit verbose, so if you trust the web-contract-types project and
its development practices, you can second any grants that it self-nominates for:

```json
{
  ...
  "mintable": {
    "grants": {},
    "second": [
      "web-contract-types"
    ]
  }
}
```

This says "for each item in
`require('web-contract-types/package.json').mintable.selfNominate` add
`"web-contract-types"` to that contract keys grant list".
If the seconded name ends in `.json` then `/package.json` is not implicitly
added to the end, so module authors might provide self-nominates for differing
levels of trust.

To see what this grants you can do the below, but keep in mind that a
package might change its self nominations in future versions so by
seconding self-nominated grants you are expressing confidence in
future development practices:

```sh
$ node -e 'console.log(JSON.stringify(require("web-contract-types/package.json").mintable.selfNominate, null, 2))'
```

See [Mintable][] for more details.

### For library authors                <a name="hdr-for-library-authors"></a>

Library code should *not* call `authorize` as in the example code for
application maintainers above.

Library code may self nominate by including a list of contract keys
that the package needs to mint values for.  In package.json

```js
{
  ...
  "mintable": {
    "selfNominate": [
      "contractKey0",
      "contractKey1"
    ]
  }
}
```

Library authors are responsible for guaranteeing that they only mint
values that meet the type's contract even when passed untrusted
inputs.

Library authors may assume that any inputs that pass a mintable types
verifier pass that type's contract, and are not responsible for
failure to preserve a contract given a verified input that does not
meet its type contract.

See [Mintable][] for more details.

## Contracts                           <a name="hdr-contracts"></a>

### TrustedHTML                        <a name="hdr-trustedhtml"></a>

A string that is safe to use in HTML context in DOM APIs and HTML documents.

A TrustedHTML is a string-like object that carries the security type contract
that its value as a string will not cause untrusted script execution when
evaluated as HTML in a browser.

Values of this type are guaranteed to be safe to use in HTML contexts,
such as, assignment to the innerHTML DOM property, or interpolation into
a HTML template in HTML PC_DATA context, in the sense that the use will not
result in a Cross-Site-Scripting vulnerability.

Instances must be created by `Mintable.minterFor(TrustedHTML)`.

When checking types, use `Mintable.verifierFor(TrustedHTML)` and do not rely on
`instanceof`.


### TrustedResourceURL                 <a name="hdr-trustedresourceurl"></a>

A URL which is under application control and from which script, CSS, and
other resources that represent executable code, can be fetched.

Given that the URL can only be constructed from strings under application
control and is used to load resources, bugs resulting in a malformed URL
should not have a security impact and are likely to be easily detectable
during testing. Given the wide number of non-RFC compliant URLs in use,
stricter validation could prevent some applications from being able to use
this type.

Instances must be created by `Mintable.minterFor(TrustedResourceURL)`.

When checking types, use `Mintable.verifierFor(TrustedResourceURL)` and do
not rely on `instanceof`.

### TrustedScript                      <a name="hdr-trustedscript"></a>

A string-like object which represents JavaScript code and that carries the
security type contract that its value, as a string, will not cause execution
of unconstrained attacker controlled code (XSS) when evaluated as JavaScript
in a browser.

A TrustedScript's string representation can safely be interpolated as the
content of a script element within HTML. The TrustedScript string should not be
escaped before interpolation.

Note that the TrustedScript might contain text that is attacker-controlled but
that text should have been interpolated with appropriate escaping,
sanitization and/or validation into the right location in the script, such
that it is highly constrained in its effect (for example, it had to match a
set of whitelisted words).

Instances must be created by `Mintable.minterFor(TrustedScript)`.

When checking types, use `Mintable.verifierFor(TrustedScript)` and do
not rely on `instanceof`.

### TrustedURL                         <a name="hdr-trustedurl"></a>

A string that is safe to use in URL context in DOM APIs and HTML documents.

A TrustedURL is a string-like object that carries the security type contract
that its value as a string will not cause untrusted script execution
when evaluated as a hyperlink URL in a browser.

Values of this type are guaranteed to be safe to use in URL/hyperlink
contexts, such as assignment to URL-valued DOM properties, in the sense that
the use will not result in a Cross-Site-Scripting vulnerability. Similarly,
TrustedURLs can be interpolated into the URL context of an HTML template (e.g.,
inside a href attribute). However, appropriate HTML-escaping must still be
applied.

Instances must be created by `Mintable.minterFor(TrustedURL)`.

When checking types, use `Mintable.verifierFor(TrustedURL)` and do not rely on
`instanceof`.


## Creating Trusted values             <a name="hdr-creating-trusted-values"></a>

```js
require('module-keys/cjs').polyfill(module, require, module.id);

const { Mintable } = require('node-sec-patterns');
const { TrustedHTML } = require('web-contract-types');

const makeTrustedHTML = require.moduleKeys.unbox(
    Mintable.minterFor(TrustedHTML),
    () => true,
    String);
```

This boilerplate can be tiresome, but this should only happen in an applications
secure kernel.

Do not grant access to `makeTrustedHTML` widely.  That defeats the purpose of
guarding constructors to minimize the amount of code that could result in a
security vulnerability.

See [Mintable][] for more details.

## Verifying Trusted values            <a name="hdr-verifying-trusted-values"></a>

Any JavaScript code that can access a class can create an object that
is an `instanceof` that class.

To prevent accepting a contract forged by code outside your secure kernel,
check types thus:

```js
const { TrustedHTML } = require('web-contract-types');

if (TrustedHTML.is(x)) {
  // x is not a forgery
  // May assume x meets its type contract.
} else {
  // Do not assume x meets the TrustedHTML type contract.
}
```


## API                                 <a name="hdr-api"></a>

### class TrustedHTML                  <a name="hdr-class-trustedhtml"></a>

The contract type for TrustedHTML.  See [contract](#hdr-trustedhtml) above.

### TrustedHTML.concat                 <a name="hdr-trustedhtml-concat"></a>

```js
const { TrustedHTML } = require('web-contract-types');
TrustedHTML.concat(x, y, z);
```

Takes any number of *TrustedHTML* inputs and returns a *TrustedHTML* output
whose content is the concatenation of the inputs' content.

Throws a *TypeError* if any input does not verify as *TrustedHTML*

### TrustedHTML.empty                  <a name="hdr-trustedhtml-empty"></a>

A *TrustedHTML* instance that represents the empty document fragment.

```js
const { TrustedHTML } = require('web-contract-types');
TrustedHTML.empty;
```

### TrustedHTML.escape                 <a name="hdr-trustedhtml-escape"></a>

Given a string, returns a *TrustedHTML* instance that represents a text
node with that textContent.

Given a TrustedHTML instance, returns it unchanged.

The content is equivalent to the input but with `'<'` replaced with `'&lt;'`,
and other HTML metacharacters replaced with similar character references.

```js
const { TrustedHTML } = require('web-contract-types');
TrustedHTML.escape('Hello, <World!>').content === 'Hello, &lt;World!&gt;';
```

### TrustedHTML.fromScript              <a name="hdr-trustedhtml-fromscript"></a>

```js
const { TrustedHTML } = require('web-contract-types');
TrustedHTML.fromScript(myTrustedResourceURL)
```

Given a *TrustedResourceURL*, returns a `TrustedHTML` instance like `<script src=...></script>`.

Given a *TrustedScript*, returns a `TrustedHTML` instance like `<script>...</script>`.

May also take a second options argument that allows specifying:

*  `type`:  May be "module" to specify that the src is an ES6 module not a script
*  `defer`: If truthy, the output script element has the defer attribute.
*  `async`: If truthy, the output script element has the async attribute.
*  `nonce`: Unescaped text of a Conent-Security-Policy nonce.

### class TrustedResourceURL           <a name="hdr-class-trustedresourceurl"></a>

The contract type for TrustedResourceURL.  See [contract](#hdr-trustedresourceurl) above.

### TrustedResourceURL.fromScript      <a name="hdr-trustedresourceurl-fromscript"></a>

```js
const { TrustedResourceURL } = require('web-contract-types');

TrustedResourceURL.fromScript(myTrustedScript)
// ~ data:text/javascript,...
```

If the input is a *TrustedScript* returns a *TrustedResourceUrl* with scheme `data:`,
content type text/javascript, and a data segment that is the script's content.

If the input is not a *TrustedScript*, throws a *TypeError*.

### class TrustedScript                <a name="hdr-class-trustedscript"></a>

The contract type for TrustedScript.  See [contract](#hdr-trustedscript) above.

### TrustedScript.expressionFromJSON   <a name="hdr-trustedscript-expressionfromjson"></a>

```js
const { TrustedScript } = require('web-contract-types');

const dataObject = { "foo": [ "bar" ] };

TrustedScript.expressionFromJSON(dataObject)
// ~ ({ "foo", [ "bar" ] })
```

Forwards its arguments to `JSON.stringify` and returns a *TrustedScript*
whose content is a parenthesized JavaScript expression that produces
similar data.

It forwards all arguments, so accepts the same [optional arguments][JSON args]
as `JSON.stringify`.

*  value
*  replacer
*  space

It throws an exception when `JSON.stringify` does -- for example, reference cycles.

### class TrustedURL                   <a name="hdr-class-trustedurl"></a>

The contract type for TrustedURL.  See [contract](#hdr-trustedurl) above.

### TrustedURL.innocuousURL            <a name="hdr-trustedurl-innocuousurl"></a>

```js
const { TrustedURL } = require('web-contract-types');
TrustedURL.innocuousURL
```

A URL that will have no effect when loaded.  May be used as a placeholder.

### TrustedURL.sanitize                <a name="hdr-trustedurl-sanitize"></a>

```js
const { TrustedURL } = require('web-contract-types');
TrustedURL.sanitize('http://example.com/').content === 'http://example.com';
```

Given a string, returns a *TrustedURL* with that string's content if the
string is a relative URL or has a scheme in

* http
* https
* mailto
* tel

Given a *TrustedURL* returns its input unchanged.

If the input does not pass one of the given conditions, returns its second
argument unchanged, or if that argument is falsey, returns `TrustedURL.innocuousURL`.


[Mintable]: https://npmjs.com/package/node-sec-patterns
[JSON args]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Parameters
