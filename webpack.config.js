var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }
    ],
  },
  plugins: ([
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]),
  stats: { colors: true }
};

