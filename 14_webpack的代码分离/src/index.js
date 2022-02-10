import { join } from 'lodash'

console.log(join(['hello', 'index']))

const button = document.createElement('button')
button.innerHTML = '加载元素'
button.addEventListener('click', () => {
  // 懒加载
  // webpackPrefetch: 预获取
  // webpackPreload: 预加载
  import(/* webpackPrefetch: true */ './element').then(({ default: element }) => {
    console.log(element)
  })
})

document.body.appendChild(button)
