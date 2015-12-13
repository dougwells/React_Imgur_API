var React = require('react');

module.exports = React.createClass({

//when onClick gets triggered, run handleClick function (above)
  render: function() {
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}/>
      <span>{this.props.subTitle}</span>
    </button>
  }
});
