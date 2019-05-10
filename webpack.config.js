const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  mode: 'development',
  // entry: 'test.js', // main: 'test.js', 打包后生成的js文件名默认为main.js
  entry: {
    main: './test.js',
    sub: './test.js'
  },
  output: {
    // publicPath: '/',
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, './dist'), // path.join & path.resolve
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_moudles/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // webpack-dev-server 服务器的配置项
    hot: true,
    hotOnly: true,
    port: 8090,
    open: true,
    contentBase: './dist'
  },
  devtool: 'cheap-module-eval-source-map'

}
