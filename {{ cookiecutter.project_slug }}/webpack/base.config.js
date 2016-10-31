var path = require('path')
var webpack = require('webpack')

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
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }{% if cookiecutter.use_bootstrap == 'y' %},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(woff|woff2)$/,
        loader:'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }{% endif %}
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
}
