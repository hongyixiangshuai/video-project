module.exports = {
  eslint: true,
  wpyExt: '.wpy',
  compilers: {
    sass: {
      outputStyle: 'compressed'
    },
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: ['es2015', 'stage-1'],
      plugins: ['transform-export-extensions', 'syntax-export-extensions']
    }
  }
}
