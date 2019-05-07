const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  mode: 'development',
  entry: 'test.js',
  output: {
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 8090,
    contentBase: './dist'
  },
  devtool: 'cheap-module-eval-source-map'

}
