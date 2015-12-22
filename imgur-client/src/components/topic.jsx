var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore,'onChange')
  ],

  getInitialState: function(){
    return {
      images: []
    }
  },

  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },

  render: function(){
    return <div>I am topic {this.props.params.id}!</div>
  },
  onChange: function(event, images){
    this.setState({images: images});
  }
});
