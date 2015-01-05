module.exports = function ( karma ) {
  karma.configure({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'bower_components/ionic/release/js/ionic.bundle.js',
      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-cookies/angular-cookies.min.js',
      'bower_components/angular-payments/lib/angular-payments.min.js',
      'bower_components/hammerjs/hammer.min.js',
      'bower_components/angular-material/angular-material.min.js',
      'bower_components/angular-toaster/angular-toaster.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
      'bower_components/ngCordova/dist/ng-cordova.js',
      'bower_components/ionic-rating/ionic-rating.min.js',
      'build/templates-app.js',
      'build/templates-common.js',
      
      'src/**/*.js',
      'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coffee-preprocessor' ],
    preprocessors: {
      '**/*.coffee': 'coffee',
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ]
  });
};

