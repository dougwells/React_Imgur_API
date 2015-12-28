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
    return Api.get('gallery/image/' +imageId)
    .then(function(json){
      if(this.images){
        console.log('this.images true')
        this.images.push(json.data);
        console.log(this.images);
      }else{
//make this.image an array so that Lodash methods work ...
        this.images = [json.data];
        console.log('this.images false')
        console.log(this.images);
      }
      this.triggerChange();

    }.bind(this));
  },

  triggerChange: function(){
    console.log('ImageStore triggerChange');
    this.trigger('change', this.images);
  },


  find: function(id){
    var image=_.findWhere(this.images, {id:id});
    if(image){
      return image
    }else{
      this.getImage(id);
      return null
    }
  }
});
