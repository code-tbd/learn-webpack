const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'js/bundle.js',
    // 打包后的输出目录
    path: path.resolve(__dirname, './build'),

    // 打包后域名下的公共路径
    // 1 [/] - 多数脚手架默认值，兼容浏览器域名拼接其他资源地址
    // 2 [./] - 本地直接打开，当前文件夹可找到其他资源
    // 3 [] - 同2
    publicPath: '/cba',
  },
  // devServer在开发环境中开启一个本地服务
  devServer: {
    // hot设置为'only'时编译错误后的第一次编译成功不刷新页面
    hot: 'only',

    // 开发环境跨域解决方案
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },

        // 服务端能识别到原来客户端地址，而非代理地址
        changeOrigin: true,

        // 访问https地址时需要加上secure: false,
        // target: 'https://other-server.example.com',
        // secure: false,
      },
    },

    // 支持history路由模式下刷新
    historyApiFallback: true,

    static: {
      // 本地开启服务后域名下的公共路径
      // 应同output.publicPath保持一致
      publicPath: '/cba',

      // 本地开启服务后原有静态资源的根目录地址
      directory: path.resolve(__dirname, './abc/js'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}
