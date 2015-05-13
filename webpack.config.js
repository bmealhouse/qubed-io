module.exports = {

  entry: './src/app/app.js',

  output: {
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  devServer: {
    contentBase: './src',
    // inline: true
  }

};
