const message: string = 'hello typescript'

const foo = (info: string) => {
  console.log(info)
}

const p = new Promise<void>((resolve, reject) => {
  resolve()
})

foo(message)
