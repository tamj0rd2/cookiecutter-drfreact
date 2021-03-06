var React = require('react') // eslint-disable-line no-unused-vars
var ReactDOM = require('react-dom')
var App = require('./app') // eslint-disable-line no-unused-vars


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
)

// required to enable hot-reloading of modules
if (module.hot) {
  module.hot.accept()
}
