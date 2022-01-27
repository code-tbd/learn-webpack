import './../css/index.css'
import './../css/component.less'
import './../css/test.css'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ['hello', 'webpack'].join(' ')
  element.className = 'blue'

  const imgEl = new Image()
  imgEl.src = require('../img/2.png')
  element.appendChild(imgEl)

  const bgDivEl = document.createElement('div')
  bgDivEl.style.height = '200px'
  bgDivEl.style.width = '200px'
  bgDivEl.className = 'bg-image'
  // bgDivEl.style.backgroundColor = 'red'
  element.appendChild(bgDivEl)

  return element
}

document.body.appendChild(component())
