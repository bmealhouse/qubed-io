var PurifyCssPlugin = require('purifycss-loader/PurifyCssPlugin')

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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' }
    ]
  },
  plugins: [
    new PurifyCssPlugin(__dirname, '/src/index.html')
  ],
  devServer: {
    contentBase: './src',
    inline: true
  }
}
