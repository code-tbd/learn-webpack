const path = require('path')
// 清空上次打包生成的文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        // 方式1：通过ts-loader编译ts文件
        // ts-loader依赖于tsc
        // ts-loader不支持poly-fill
        // use: ['ts-loader']

        // 方式2：通过babel-loader的@babel/preset-typescript编译ts文件
        // babel-loader只负责编译，不具备运行时类型检查的能力

        // 解决方案：babel-loader编译，tsc检查
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
