export function dateFormat() {
  return '2022-02-14'
}

export function priceFormat() {
  return '100'
}

// 有副作用
// 在package.json中sideEffects的数组上添加文件路径
// 未使用时，打包时会保留
window.abc = '123'
