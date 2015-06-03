module.exports = function(config) {
  config.set({

    browsers: ["PhantomJS"],
    frameworks: ["mocha", "chai-sinon"],
    reporters: ["narrow"],

    osxReporter: {
      notificationMode: 'failOnly'
    },

    preprocessors: {
      "src/app/pixi/*.js": ["webpack"],
      "src/tests/pixi/*.js": ["webpack"]
    },

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
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    files: [
      "src/app/pixi/*.js",
      "src/tests/pixi/*.js"
    ]

  });
};
