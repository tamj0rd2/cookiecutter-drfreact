/** Local/development configuration for webpack. This does not use hot reload
  * Generates a bundle in assets/bundles.
  * To use this configuration, run either of the below commands:
  * npm run build-local
  * ./node_modules/.bin/webpack --config webpack/local.config.js
**/

var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./base.config.js')

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack/webpack-stats-local.json'}),
])

module.exports = config
