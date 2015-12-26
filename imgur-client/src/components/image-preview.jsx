var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {
      hovering: false
    }
  },
//play video on mouseover if animated.  Imgur gives property animated
//see all imgur image properties at http://api.imgur.com/endpoints/gallery
//note tertiary to decide this.video or this.image
  render: function(){
    return <div
      className="image-preview"
      onMouseEnter= {this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.animated && this.state.hovering ? this.video() : this.image() }
      {this.props.animated && !this.state.hovering ? this.icon() : null }
      {this.state.hovering ? this.inset() : null}
    </div>
  },

//Imgur images include static & moving (.mpeg4, .gif)
//Imgur provides static jpeg preview of all at .h
  image: function(){
    var link='http://i.imgur.com/'+this.props.id+'h.jpeg';
    return <img src={link} />
  },

//<video> is simply HTML5 tag

inset: function(){
  return <div className="inset">
    Views: {this.props.views}
    <br />
    Upvotes: {this.props.ups}
  </div>
},

  video: function(){
    return <div>
      <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-plays-inline>
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>
    </div>
  },
  icon: function(){
    return <span className="glyphicon glyphicon-play-circle"></span>
  },

  handleMouseEnter: function(){
    this.setState({hovering:true})
  },
  handleMouseLeave: function(){
    this.setState({hovering: false})
  }
});
