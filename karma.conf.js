module.exports = config => {
  config.set({

    basePath: './app',

    files: [
      {
        pattern: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js',
        watched: false
      },
      {
        pattern: 'bower_components/angular-mocks/angular-mocks.js',
        watched: false
      },
      'components/**/*.test.js'
    ],

    preprocessors: {
      'components/**/*.test.js': ['webpack']
    },

    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'istanbul-instrumenter',
            exclude: /(node_modules|bower_components|\.test\.js$)/,
            query: {
              esModules: true
            }
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.pug$/,
            loader: 'ngtemplate!html!jade-html'
          },
          {
            test: /\.(?:styl|jpg)$/,
            loader: 'ignore'
          }
        ]
      },
      externals: {
        angular: true
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },

    autoWatch: true,

    frameworks: ['mocha'],

    browsers: ['Firefox'],

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      reporters: [
        {
          type: 'lcovonly',
          dir: '../coverage/',
          subdir: 'lcov'
        },
        {
          type: 'html',
          dir: '../coverage/',
          subdir: 'html'
        }
      ]
    }

  });
};
