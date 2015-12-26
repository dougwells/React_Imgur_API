var Api=require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  getImages: function(topicId){
    return Api.get('topics/'+topicId)
    .then (function(json){
      console.log(json);

//lodash - rejects imgur albums (imgur gives them prop .is_album)
//for every image, reject those w/image.is_album is true
//not return image.is_album returns boolean
      this.images = _.reject(json.data, function(image){
        return image.is_album
      });
      this.triggerChange();
    }.bind(this));
  },

//getImage returns an Object called "data"
  getImage: function(imageId){
    return Api.get('image/' +imageId)
    .then(function(json){
      console.log(json);
      this.image = json.data;
    }.bind(this));
  },

  triggerChange: function(){
    this.trigger('change', this.images);
  }
});
