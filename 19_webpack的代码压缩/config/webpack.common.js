const resolvePath = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

let isProduction = false

const commonConfig = (isProduction) => ({
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: resolvePath('./build'),
   
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.wasm', '.mjs'],
    alias: {
      '@': resolvePath('./src'),
      pages: resolvePath('./src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // html资源注入
      inject: true,
      // 多次打包是否使用缓存
      cache: true,
      // 是否压缩html代码
      // https://github.com/terser/html-minifier-terser
      minify: isProduction
        ? {
            // 清楚注释
            removeComments: true,
            // 清楚多余的属性
            removeRedundantAttributes: true,
            // 清楚空属性
            removeEmptyAttributes: true,
            // 折叠空格
            collapseWhitespace: false,
            // 清楚引入类型
            removeStyleLinkTypeAttributes: true,
            // 对style中的css压缩
            minifyCSS: true,
            // 对js中的代码压缩
            minifyJS: {
              mangle: {
                toplevel: true,
              },
            },
          }
        : false,
    }),
  ],
})

module.exports = function (env) {
  isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? prodConfig : devConfig
  return merge(commonConfig(isProduction), config)
}

// shimming不推荐使用
