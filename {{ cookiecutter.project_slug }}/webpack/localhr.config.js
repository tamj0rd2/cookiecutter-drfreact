/** Local/development configuration for webpack. Uses hot reload.
  * Any time your source js files change, the bundle will be updated in memory.
  * To use this configuration, run the following command:
  * npm start
**/

var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./base.config.js')

config.entry = [
  'webpack-dev-server/client?http://localhost:3000/',
  'webpack/hot/only-dev-server',
  '../assets/js/index'
]

// tell django to use use this URL to load bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/'

// add HotModuleReplacementPlugin
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({filename: './webpack/webpack-stats-local.json'}),
])

module.exports = config
