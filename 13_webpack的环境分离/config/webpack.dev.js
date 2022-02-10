const resolvePath = require('./path')

module.exports = {
  mode: 'development',
  devServer: {
    hot: 'only',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
    static: {
      publicPath: '/cba',
      directory: resolvePath('./abc/js'),
    },
  },
}
