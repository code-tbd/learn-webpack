const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  externals: {
    lodash: '_',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    // 压缩css代码
    new CssMinimizerPlugin(),
  ],
  optimization: {
    // minimize: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 多进程构建，默认值为true
        parallel: true,
        // 是否将注释抽离到单独文件内
        extractComments: false,
        terserOptions: {
          // 查阅terser文档
          // https://github.com/terser/terser#minify-options
        },
      }),
    ],
  },
}
