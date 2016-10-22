/** Production configuration for webpack.
  * Generates a bundle in assets/dist.
  * To use this configuration, run either of the below commands:
  * npm run build-prod
  * ./node_modules/.bin/webpack --config webpack/prod.config.js
**/

var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./base.config.js')

config.output.path = require('path').resolve('./assets/dist')

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack/webpack-stats-prod.json'}),

  // removes lots of debugging code in react
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),

  // keep hashes consistent
  new webpack.optimize.OccurenceOrderPlugin(),

  // minify code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

module.exports = config
