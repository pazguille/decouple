const fs = require('fs');
const browserify = require('browserify');

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

browserify({ debug: false, standalone: 'decouple' })
  .require('./index.js', { entry: true })
  .bundle()
  .on('error', err => console.log(`Error: ${err.message}`))
  .pipe(fs.createWriteStream('dist/decouple.js'));
