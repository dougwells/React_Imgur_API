//We need to show a button and a list.  This component should remember whether
//to show list or not based on last state of component


var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');
// var arr = [<li>Savs</li>, <li>Sierra</li>];



module.exports=React.createClass({
  handleClick: function(){    //changes state when clicked
    this.setState({open: !this.state.open});
  },

  getInitialState: function(){  //sets initial state
    return {open: false}
  },

  handleItemClick: function(param){
    this.setState({
      open: !this.state.open,
      selItem: param
    });
  },

  render: function(){
    var list = this.props.items.map(function(arrayItem){
      return <ListItem
        oneItem={arrayItem}
        whenItemClicked={this.handleItemClick}
        className = {this.state.selItem === arrayItem ? "active":""}
        />
    }.bind(this));

    return <div className='dropdown'>
      <Button
        className={this.props.className}
        whenClicked={this.handleClick}
        title={this.state.selItem || this.props.title}
      />
    <ul className={"dropdown-menu "+(this.state.open ? "show":"")}>
      {list}
    </ul>
    </div>
  }

});
