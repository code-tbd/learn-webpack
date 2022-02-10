import { join } from 'lodash'

console.log(join(['hello', 'main']))

// webpack一定会对异步导入文件分包
// 魔法注释：
// webpackChunkName: 设置占位符[name]的值
import(
  /* webpackChunkName: "foo" */
  
  './foo'
).then()
