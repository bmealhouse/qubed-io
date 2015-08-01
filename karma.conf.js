module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],
    files: [{ pattern: 'tests.webpack.js', watched: false }],
    frameworks: ['mocha', 'chai-sinon'],
    osxReporter: { notificationMode: 'failOnly' },
    preprocessors: { 'tests.webpack.js': ['webpack'] },
    reporters: ['narrow', 'osx'],

    // client: {
    //   mocha: {
    //     reporter: 'html', // change Karma's debug.html to the mocha web reporter
    //     ui: 'tdd'
    //   }
    // },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      }
      // resolve: {
      //   extensions: ['', '.js']
      // }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    }

  })
}
