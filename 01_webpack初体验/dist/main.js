;(() => {
  var o = {
      64: (o) => {
        o.exports = {
          dateFormate: (o) => '2022-01-01',
          priceFormate: (o) => '100.00'
        }
      }
    },
    e = {}
  function r(t) {
    var s = e[t]
    if (void 0 !== s) return s.exports
    var a = (e[t] = { exports: {} })
    return o[t](a, a.exports, r), a.exports
  }
  ;(() => {
    'use strict'
    const { dateFormate: o, priceFormate: e } = r(64)
    console.log(50), console.log(600), console.log(o(123)), console.log(e(123))
  })()
})()
