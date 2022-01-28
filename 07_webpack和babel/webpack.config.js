const path = require('path')
// 清空上次打包生成的文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 打包生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // 开发阶段
  // devtool: 'cheap-module-source-map',
  // 测试阶段
  // devtool: 'cheap-module-source-map',
  // 生产阶段
  // devtool: false,
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
}
