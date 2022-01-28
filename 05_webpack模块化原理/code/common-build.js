var __webpack_modules__ = {
  './src/js/formate.js': function (module) {
    const dateFormate = (date) => {
      return '2022-01-01'
    }
    const priceFormate = (price) => {
      return '100.00'
    }

    module.exports = {
      dateFormate,
      priceFormate
    }
  }
}

// 定义一个对象，作为加载模块的缓存
var __webpack_module_cache__ = {}
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  // 1.判断缓存中是否已经加载过
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }

  // 2.给module和__webpack_module_cache__[moduleId]赋值同一个引用
  var module = (__webpack_module_cache__[moduleId] = { exports: {} })

  // 3.加载模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

  // 4.返回模块导出 { dateFormate, priceFormate }
  return module.exports
}

var __webpack_exports__ = {}
!(function () {
  // 解构
  const { dateFormate, priceFormate } = __webpack_require__(
    './src/js/formate.js'
  )

  console.log(dateFormate('abc'))
  console.log(priceFormate('abc'))
})()
