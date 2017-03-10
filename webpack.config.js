module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
};
