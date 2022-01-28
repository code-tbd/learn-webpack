var __webpack_modules__ = {
  './src/js/math.js': function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    // 记录__esModule:true
    __webpack_require__.r(__webpack_exports__)
    // exports对象中本身没有对应函数
    __webpack_require__.d(__webpack_exports__, {
      sum: function () {
        return sum
      },
      mul: function () {
        return mul
      }
    })
    const sum = (num1, num2) => {
      return num1 + num2
    }

    const mul = (num1, num2) => {
      return num1 * num2
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

!(function () {
  // 定义导出的内容
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key]
        })
      }
    }
  }
})()

!(function () {
  // 判断对象中是否存在属性
  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }
})()

!(function () {
  // 自定义类型标签设置为Module (兼容为{'__esModule':true})
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
})()

var __webpack_exports__ = {}
!(function () {
  // 记录__esModule:true
  __webpack_require__.r(__webpack_exports__)
  var _js_math__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__('./src/js/math.js')

  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30))
  console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(20, 30))
})()
