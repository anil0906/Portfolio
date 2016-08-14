// React imports
var React = require('react');
var ReactDOM = require('react-dom');
// React Router imports
var Router = require('react-router').Router;
//Redux import
var Provider = require('react-redux').Provider;
var store = require('../stores/store').store;
var history = require('../stores/store').history;
var routes = require('../routes.js');
console.log("history in root:::::"+history);
var Root = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
});

module.exports = Root;
