

var React = require('react');
var Dropdown = require('./dropdown');

var options = {   //info needed to build the dropdown button
  title: "Choose a dessert",
  items: ['Apple Pie', 'Cherry Pie', 'Creme Bulee'],
  className: 'btn-success'
};


var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
