const path = require('path')
// 清空上次打包生成的文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // mode:'development' -> devtool:'eval'
  // devtool: 'eval',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build')
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
}
