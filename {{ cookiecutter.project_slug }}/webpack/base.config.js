var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  // entry point of the app
  entry: '../assets/js/index',

  output: {
    // where compiled bundles should be stored
    path: path.resolve('./assets/bundles/'),
    // the naming convention webpack will use for files
    filename: '[name]-[hash].js'
  },

  plugins: [
    // makes jQuery available in every module
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}
