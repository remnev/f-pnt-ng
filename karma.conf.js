let webpackConfig = require('./webpack.config');

webpackConfig.entry = {};
webpackConfig.plugins = [];

module.exports = config => {
  config.set({

    basePath: './app',

    files: [
      {
        pattern: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js',
        watched: false
      },
      {
        pattern: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.js',
        watched: false
      },
      {
        pattern: 'bower_components/angular-mocks/angular-mocks.js',
        watched: false
      },
      '../public/index.js',
      'components/**/*.test.js'
    ],

    preprocessors: {
      'components/**/*.test.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },

    autoWatch: true,

    frameworks: ['mocha'],

    browsers: ['Firefox'],

    plugins: [
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    reporters: ['mocha']

  });
};
