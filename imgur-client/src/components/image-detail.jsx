var React = require('react');
var ReactRouter = require('react-router');
var Actions = require('../actions');
var Link = ReactRouter.Link;
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');

module.exports = React.createClass({
    mixins: [
      Reflux.listenTo(ImageStore,'onChange')
    ],

    getInitialState: function(){
      return {
        image: {}
      }
    },

  componentWillMount: function(){
    ImageStore.getImage(this.props.params.id)
    .then(function(){
//runs when data is fetched.  Data avail @ ImageStore.image
      this.setState({
        image: ImageStore.image
      });
    }.bind(this));
    },

  render: function(){
    return <div>
      Image detail
      {this.renderImage()}

    </div>
  },

  renderImage: function(id){
    var imageURL = this.state.image.link;
    return <img src={imageURL} />
    },



    // Actions.getImage('oqC1TjI')
    // var imageLink='https://api.imgur.com/3/gallery/image/oqC1TjI';
    // return <img src={imageLink} />
    // },

    onChange: function(event, image){
      this.setState({image: image});
    }
});
