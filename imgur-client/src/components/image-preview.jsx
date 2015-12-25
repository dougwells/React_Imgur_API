var React = require('react');

module.exports = React.createClass({

  getInitialState: function(){
    return {
      hovering: false
    }
  },
  render: function(){
// ?? why just this.image???  B/C it is a helper function below
    return <div
      className="image-preview"
      onMouseEnter= {this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.animated && this.state.hovering ? this.video() : this.image() }
    </div>
  },

//Imgur images include static & moving (.mpeg4, .gif)
//Imgur provides static jpeg preview of all at .h
  image: function(){
    var link='http://i.imgur.com/'+this.props.id+'h.jpeg';
    return <img src={link} />
  },
  video: function(){
    return <div>
      <video preload="auto" autoPlay="autoPlay" loop="loop" webkit-plays-inline>
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>
    </div>
  },
  handleMouseEnter: function(){
    this.setState({hovering:true})
  },
  handleMouseLeave: function(){
    this.setState({hovering: false})
  }
});
