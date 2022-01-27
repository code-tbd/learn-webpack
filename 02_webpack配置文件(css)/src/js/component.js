import './../css/index.css'
import './../css/component.less'
import './../css/test.css'

function component() {
  const element = document.createElement('div')

  element.innerHTML = ['hello', 'webpack'].join(' ')
  element.className = 'blue'

  return element
}

document.body.appendChild(component())
