var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
//Listen to TopicStore.  When it triggers any event,
//Run method 'onChange'
  mixins: [
    Reflux.listenTo(TopicStore,'onChange')
  ],
  getInitialState: function(){
    return {
      topics: []
    }
  },
//getTopics is a method we coded for TopicStore.
//Returns an object that has one property called "data"
//{data: Array[10]}.  data is an array w/10 objects in it.
//thus, this.state.topics[0].name = "Star Wars"
  componentWillMount: function(){
    TopicStore.getTopics();
      },
  //run .bind(this) since function above calls "this" (this.setState)
  //need to be sure function knows which "this" so use .bind(this)

  //

  render: function(){
    return <div className="list-group">
      Topic List ...
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    console.log(this.state.topics);
    return this.state.topics.map(function(topic){
      return <li>{topic.name}</li>
    }
  )},

//when onChange runs, components re-render since on State
//topics is json data (set in topic-store via this.topics)
  onChange: function(event, topics){
    this.setState({topics: topics});
  }
});
