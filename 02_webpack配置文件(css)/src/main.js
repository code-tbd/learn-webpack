import { sum, mul } from './js/math'
const { dateFormate, priceFormate } = require('./js/formate')
import './js/test'
import './js/component'

console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(dateFormate(123))
console.log(priceFormate(123))
