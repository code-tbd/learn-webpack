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
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    path: resolvePath('./build'),

    // 所有静态资源通过cdn获取，将publicPath设置为cdn地址即可
    // publicPath:'https://xxx.com/cdn/'
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
        // use: ['style-loader', 'css-loader'],
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
})

module.exports = function (env) {
  // webpack config 环境分离
  isProduction = env.production

  // process.env.NODE_ENV 为字符串类型
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? prodConfig : devConfig
  return merge(commonConfig(isProduction), config)
}

// shimming不推荐使用
