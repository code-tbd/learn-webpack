const presets = []

const plugins = []

presets.push('@babel/preset-env', '@babel/preset-react')

// babel环境分离
if (process.env.NODE_ENV === 'production') {
  console.log('-------------------------babel--------------production')
} else {
  console.log('-------------------------babel--------------development')
}

module.exports = {
  presets,
  plugins,
}
