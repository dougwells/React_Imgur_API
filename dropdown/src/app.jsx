var React = require('react');
var Dropdown = require('./dropdown');

var options = {   //info needed to build the dropdown button
  title: "Choose a dessert",
  item: ['Apple Pie', 'Cherry Cobbler', 'Creme Bulee'], //items for dropdown
  className: 'btn-default'
};


var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
