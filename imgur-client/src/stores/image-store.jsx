var Api=require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

//listenables tells image-store to run any of its function called via Actions
module.exports = Reflux.createStore({
  listenables: [Actions],

//getImages returns an object.  That object has one item, an array called "data"
//json.data refers to an array which, in our case, has 60 objects in it
//Object {data: Array[60], success: true, status: 200}
  getImages: function(topicId){
    return Api.get('topics/'+topicId)
    .then (function(json){
      console.log(json);

//lodash - rejects imgur albums (imgur gives them prop .is_album)
//for every image, reject those w/image.is_album is true
//not return image.is_album returns boolean
//otherwise code would simply be this.images = json.data
//"this" refers to whatever var is assigned to require('./image-store')
      this.images = _.reject(json.data, function(image){
        return image.is_album
      });
      this.triggerChange();
    }.bind(this));
  },

//getImage returns an Object called "data". "data" is also an object.
//thus, json parameter refers to the outside object
//json.data refers to the object inside, called Data
//json.data has all the fields for the one image that getImage retrieves
//"this.image" get assigned to ImageStore.image
//AS LONG AS var ImageStore = require('./image-store')
//"this" refers to the variable that gets assigned via require/module.exports

  getImage: function(imageId){
    return Api.get('image/' +imageId)
    .then(function(json){
      console.log(json);
      this.image = json.data;
      this.triggerImageChange();
    }.bind(this));
  },

  triggerChange: function(){
    this.trigger('change1', this.images);
  },

  triggerImageChange: function(){
    this.trigger('change2', this.image);
  }
});
