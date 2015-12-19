var React = require('react');
var Header = require('./header');
var x=0;

module.exports = React.createClass({
  render: function(){
    console.log(x++);
    return <div>
      <Header />
      {this.props.children}
    </div>
  }
});
