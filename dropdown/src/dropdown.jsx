//We need to show a button and a list.  This component should remember whether
//to show list or not based on last state of component


var React = require('react');       //since in node_modules, no ./ needed
var Button = require('./button');
var List = require('./list');

module.exports=React.createClass({
  render: function(){
    return <div className='dropdown'>
      <Button className={this.props.className} title={this.props.title}
        subTitleClassName='caret' subTitle = "29"/>
    </div>
  }

});
