var React = require('react');

module.exports = React.createClass({

  render: function(){
    return <div>
      I am an image w/ID={this.props.id}
    </div>
  },

//Imgur images include static & moving (.mpeg4, .gif)
//Imgur provides static jpeg preview of all at .h
  image: function(){
    var link='http://i.imgur.com/'+this.props.id+'h.jpeg';
    return <img src={src} />
  }
});
