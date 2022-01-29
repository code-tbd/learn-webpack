module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 'usage'：引入用到的polyfill
        // 'entry'：手动导入'core-js/stable'和'regenerator-runtime/runtime'文件，根据目标浏览器引入所有polyfill
        // useBuiltIns: 'usage',
        // corejs: 3
      }
    ],
    '@babel/preset-react'
  ]
}
