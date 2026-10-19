module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [{ pattern: 'src/tests/**/*.spec.jsx', watched: false }],
    preprocessors: { 'src/tests/**/*.spec.jsx': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { browsers: 'last 2 Chrome versions' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }],
                ],
              },
            },
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
      resolve: { extensions: ['.js', '.jsx'] },
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-dev-shm-usage'],
      },
    },
    singleRun: true,
    restartOnFileChange: false,
  });
};
