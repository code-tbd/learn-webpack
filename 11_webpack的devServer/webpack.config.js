const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  // watch: true,
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
}
