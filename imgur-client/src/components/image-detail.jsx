var React = require('react');
var ReactRouter = require('react-router');
var Actions = require('../actions');
var Link = ReactRouter.Link;
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
    mixins: [
      Reflux.listenTo(ImageStore,'onChangeOne'),
      Reflux.listenTo(ImageStore,'onChangeTwo'),
    ],

    getInitialState: function(){
      return {
        image: null
      }
    },

  componentWillMount: function(){
    console.log('componentWillMount ran');
    Actions.getImage(this.props.params.id)
  },

  render: function(){
    console.log('image-detail component rendered');
    console.log(this.state.image);
    return <div>
      {this.state.image}
    </div>
  },


    onChangeOne: function(){
      console.log('onChange1');
      this.setState({
        image: ImageStore.find(this.props.params.id)
      });
    },

    onChangeTwo: function(){
      console.log('onChange2');
      this.setState({
        image: ImageStore.find(this.props.params.id)
      });
    }
});
