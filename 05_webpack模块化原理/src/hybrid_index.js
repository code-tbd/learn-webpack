// es module 导出 commonjs 导入
const { sum, mul } = require('./js/math')

console.log(sum(20, 30))
console.log(mul(20, 30))

// commonjs 导出 es module 导入
import { dateFormate, priceFormate } from './js/formate'

console.log(dateFormate(111))
console.log(priceFormate(111))
