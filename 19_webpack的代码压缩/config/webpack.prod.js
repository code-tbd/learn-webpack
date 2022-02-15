const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const resolvePath = require('./path')
const CompressWebpackPlugin = require('compression-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
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
    // 代码压缩插件
    new CompressWebpackPlugin({
      // 最小压缩大小
      threshold: 0,

      test: /\.(css|js)$/,

      // 最小压缩比例
      minRatio: 0.8,

      // 压缩算法
      algorithm: 'gzip',

      // exclude
      // include
    }),
    // 将runtime注入到html
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime.*\.js$/])
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {},
      }),
    ],
    runtimeChunk: {
      name: 'runtime',
    },
  },
}
