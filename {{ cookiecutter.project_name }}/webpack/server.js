/* Server configuration for hot reloading */

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./localhr.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log('Listening at 0.0.0.0:3000')
})
