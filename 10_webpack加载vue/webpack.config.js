const path = require('path')
// 清空上次打包生成的文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint插件，运行时控制台显示错误
const ESLintPlugin = require('eslint-webpack-plugin')
// vue插件
const { VueLoaderPlugin } = require('vue-loader/dist')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      // {
      //   test: /\.(jsx?|tsx?)$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
