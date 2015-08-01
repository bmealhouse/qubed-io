module.exports = {

  entry: {
    app: './src/app/app.js',
    movies: './src/app/movies/galaxy.js'
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  devServer: {
    contentBase: './src',
    inline: true
  }

}
