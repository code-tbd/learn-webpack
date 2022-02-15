const path = require('path')

const appDir = process.cwd()
const resolvePath = (relativePath) => path.resolve(appDir, relativePath)

module.exports = resolvePath
