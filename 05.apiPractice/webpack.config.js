const path = require('path');

// const ExtractCSS = require("extract-text-webpack-plugin");
const MiniExtractCSS = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'static');

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniExtractCSS.loader,
            options: {
              hmr: process.env.WEBPACK_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer({
                    overrideBrowserslist: 'cover 99.5%',
                  }),
                ];
              },
            },
          },

          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
  },
  plugins: [
    new MiniExtractCSS({
      filename: 'styles.css',
    }),
  ],
};

module.exports = config;
