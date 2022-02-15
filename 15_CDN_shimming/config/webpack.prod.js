const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  externals: { 
    lodash: '_',
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({
      filename:'css/[name].[hash:8].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 拆分包的最小值
      minSize: 20000,
      // 把大于maxSize的包拆分成不小于minSize的包
      maxSize: 20000,
      // 拆分导入次数不小于minChunks的包
      minChunks: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/vendor-[id].js',
        },
      },
    },
    // 单独打包runtime相关代码
    runtimeChunk: 'single',
    // 命名
    chunkIds: 'deterministic',
    // minimize: true,
    minimizer: [
      // 简洁
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}
