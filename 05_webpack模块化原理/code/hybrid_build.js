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
  },

  './src/js/math.js': function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict'
    __webpack_require__.r(__webpack_exports__)
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
var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {}
  })

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

  return module.exports
}

!(function () {
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function () {
            return module['default']
          }
        : function () {
            return module
          }
    __webpack_require__.d(getter, { a: getter })
    return getter
  }
})()

!(function () {
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
  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }
})()

!(function () {
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
})()

var __webpack_exports__ = {}
!(function () {
  'use strict'
  __webpack_require__.r(__webpack_exports__)
  var _js_formate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    './src/js/formate.js'
  )
  var _js_formate__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
    _js_formate__WEBPACK_IMPORTED_MODULE_0__
  )
  // es module 导出 commonjs 导入
  const { sum, mul } = __webpack_require__('./src/js/math.js')

  console.log(sum(20, 30))
  console.log(mul(20, 30))

  // commonjs 导出 es module 导入

  console.log(
    _js_formate__WEBPACK_IMPORTED_MODULE_0___default().dateFormate(111)
  )
  console.log(
    _js_formate__WEBPACK_IMPORTED_MODULE_0___default().priceFormate(111)
  )
})()
