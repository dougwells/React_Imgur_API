var React = require('react');
var ReactRouter = require('react-router'); //actual react router library
var HashHistory = require('react-router/lib/HashHistory'); //how React keeps track of 'page' user is on
var Main = require('./components/main');

var Router = ReactRouter.Router; //actual router deciding what content to show on page at any given time
var Route = ReactRouter.Route;  //object used to configure .Router


//create a routes object (was var routes = ...)
module.exports = (
  <Router history={new HashHistory} >

    <Route path='/' component= {Main}>
    </Route>

  </Router>
)
