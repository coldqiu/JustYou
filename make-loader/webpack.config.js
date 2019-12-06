const path = require('path');
const CoypRightWebpackPlugin = require('./plugins/copyRightPlugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders'] // 表明loader所在的文件夹
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {
          loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
          options: {
            name: 'lee'
          }
        },
        {
          loader: 'replaceLoader'
        }
      ]
    }]
  },
  plugins: [
    new CoypRightWebpackPlugin({
      name: 'pluginName'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
