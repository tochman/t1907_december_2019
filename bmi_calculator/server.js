const superstatic = require('superstatic')
const browserSync = require('browser-sync')

browserSync.init({
  server: {
    middleware: [superstatic({ stack: 'strict'})]
  },
  watch: true,
  files: ['*.html', '**/*.js', '**/*.css']
})