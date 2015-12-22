var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
//create a routes object (was var routes = ...)

module.exports = (
  <Router history={new HashHistory}>
    <Route path='/' component={Main}>
      <Route path="topics/:id" component={Topic} />
    </Route>

  </Router>
)
