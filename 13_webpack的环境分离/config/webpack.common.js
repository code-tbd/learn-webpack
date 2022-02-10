const resolvePath = require('./path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

const commonConfig = {
  // 基础目录，默认使用CWD
  context: resolvePath(''),

  // entry路径相对于context
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: resolvePath('./build'),
    publicPath: '/cba',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}

module.exports = function (env) {
  // webpack config 环境分离
  const isProduction = env.production

  // process.env.NODE_ENV 为字符串类型
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? prodConfig : devConfig
  return merge(commonConfig, config)
}
