var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    this.props.whenItemClicked(this.props.oneItem);
  },
  render: function() {
    return <li><a onClick={this.handleClick}>{this.props.oneItem}</a></li>
  }
});
