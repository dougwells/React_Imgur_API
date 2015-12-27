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
    return <div className="image-detail">
      {this.state.image ? this.renderContent() : null}
    </div>
  },
    renderContent: function(){
      return <div>
          <div className='panel panel-default'>
            <div className='panel-heading'>
              <h4>{this.state.image.title}</h4>
            </div>
            <div className="panel-body">
              {this.renderImage()}
            </div>
            <div className='panel-footer'>
              <h5>{this.state.image.description}</h5>
            </div>
          </div>
        </div>
    },

    renderImage: function(){
      var imageLink = this.state.image.link
      if(!this.state.image.animated){
      return <img src={imageLink} />
      }else {
        return <video preload='auto' autoPlay='autoplay' loop='loop' webkit-plays-inline>
          <source src={this.state.image.mp4} type='video/mp4'></source>
        </video>
      }
    },

    // renderComments: function(){
    //   console.log(this.state.image.comment_preview);
    //   return this.state.image.comment_preview.map(function(comment){
    //     return <h5>{comment.comment}</h5>
    //   });
    // },

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
