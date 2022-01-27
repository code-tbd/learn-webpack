const path = require('path')
// 清空上次打包生成的文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'my test webpack'
    })
  ]
}
