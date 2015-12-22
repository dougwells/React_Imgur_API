var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
//swapped out TopicStore.getTopics() for Actions.getTopics
  componentWillMount: function(){
    Actions.getTopics();
      },

  render: function(){
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    console.log(this.state.topics);
    return this.state.topics.slice(0,4).map(function(topic){
      return <Link to ={"/topics/"+topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    }
  )},

//when onChange runs, components re-render since on State
//topics is json data (set in topic-store via this.topics)
  onChange: function(event, topics){
    this.setState({topics: topics});
  }
});
