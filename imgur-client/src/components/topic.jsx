var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore,'onChange')
  ],

  getInitialState: function(){
    return {
      images: []
    }
  },

//Renders just b4 component mounts.  Challenge is ReactRouter
//is smart and only re-renders when this would be a "new" component
//IE, does NOT reload on state change if same component (new topic)
//We do not need to re-load the component (still topic)
//BUT, we do need to update it's properties.  Thus cWRP below
  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },

//cWRP DOES reload PROPERTIES into component.
//Does NOT reload component.  Merely updates its properties
//with props change (..params.id)
  componentWillReceiveProps: function(){
    Actions.getImages(this.props.params.id);
  },

  render: function() {
    return <div className="topic">
      {this.renderImages()}
    </div>
  },

//remember, {...image} means load all of this.props.xx into this componenet
//from earlier lecture.  image={...image} also works.

  renderImages: function(){
    return this.state.images.slice(0, 20).map(function(image){
      return <ImagePreview key={image.id} {...image}/>
    });

  },

  onChange: function(event, images){
    this.setState({images: images});
  }
});
