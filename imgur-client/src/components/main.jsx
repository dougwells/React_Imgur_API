var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div className="red">
      Header Stuff
      {this.props.children}
    </div>
  }
});
