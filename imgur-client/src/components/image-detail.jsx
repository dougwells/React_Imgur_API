var React = require('react');
var ReactRouter = require('react-router');
var Actions = require('../actions');
var Link = ReactRouter.Link;
var Reflux = require('reflux');
var CommentStore = require('../stores/comment-store');
var ImageStore = require('../stores/image-store');
var CommentBox = require('./comment-box');

module.exports = React.createClass({
    mixins: [
      Reflux.listenTo(ImageStore,'onChange'),
      Reflux.listenTo(CommentStore,'onChange'),

    ],

    getInitialState: function(){
      return {
        image: null,
        comment: null
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
          <h3>Comments</h3>
          {this.renderComments()}
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

    renderComments: function(){
      if(!this.state.comments){
        console.log('commentBox not run');
        return null
      }else {
        console.log("commentBox ran");
        return <CommentBox comments={this.state.comments} />
      }
    },

    onChange: function(){
      console.log('ran image-detail onChange');
      this.setState({
        image: ImageStore.find(this.props.params.id),
        comments: CommentStore.comment

      });
    }
});
