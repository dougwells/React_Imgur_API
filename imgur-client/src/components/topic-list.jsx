var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      topics: []
    }
  },
//always put cWM just b4 component is rendered ...
//"data" is simply a param. Refers to the one object from imgur
//that lists default topics.  That object has one property named
// data as well. This property is an array w/10 objects in it.
//thus, data.data[0].name = "Star Wars"
  componentWillMount: function(){
    Api.get('topics/defaults')
    .then (function(data){
      // console.log(data.data); //array w/10 objects describ topics
         this.setState({
           topics: data.data
         });
        // console.log(this.state.topics);
    }.bind(this));

  },
  //run .bind(this) since function above calls "this" (this.setState)
  //need to be sure function knows which "this" so use .bind(this)

  render: function(){
    return <div className="list-group">
      Topic List ...
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.map(function(topic){
      return <li>{topic.name}</li>
    }
  )}
});
