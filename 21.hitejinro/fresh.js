// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
  console.log('안녕');
};

// Get the navbar
var nav = document.getElementById('nav');

// Get the offset position of the nav
var sticky = nav.offsetTop;

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
