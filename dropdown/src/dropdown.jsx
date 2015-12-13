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
    return console.log(param)
  },

  render: function(){
    var list = this.props.items.map(function(arrayItem){
      return <ListItem
        oneItem={arrayItem}
        whenItemClicked={this.handleItemClick}
        />
    });

    return <div className='dropdown'>
      <Button
        className={this.props.className}
        whenClicked={this.handleClick}
        title={this.props.title}
        subTitleClassName='caret'
        subTitle = "29"
      />
    <ul className={"dropdown-menu "+(this.state.open ? "show":"")}>
      {list}
    </ul>
    </div>
  }

});
