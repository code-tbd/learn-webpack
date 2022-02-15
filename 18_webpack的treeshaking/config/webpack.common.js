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
    // [hash]和整个项目相关，修改项目中某个文件会影响所有其他文件
    // [chunkhash]和同一入口文件相关，修改入口中某个文件会影响所有其他该入口的文件
    // [contenthash]和同一入口文件相关，修改入口中某个文件会影响所有其他该入口的文件
    filename: 'js/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
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
        // css文件有副作用
        sideEffects: true,
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
