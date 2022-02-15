const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const resolvePath = require('./path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  externals: {
    lodash: '_',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
    new CssMinimizerPlugin(),
    new PurgeCssPlugin({
      paths: glob.sync(`${resolvePath('./src')}/**/*`, { nodir: true }),
      safelist: function () {
        return {
          standard: ['html', 'body'],
        }
      },
    }),
  ],
  optimization: {
    // 标注哪些函数未使用，然后由terser将未使用的函数删除
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {},
      }),
    ],
  },
}
