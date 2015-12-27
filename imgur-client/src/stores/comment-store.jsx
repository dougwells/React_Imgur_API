var Api=require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

//listenables tells image-store to run any of its function called via Actions
module.exports = Reflux.createStore({

  listenables: [Actions],

//getImage is same name as in image-detail
//want same name so that when image-detail component mounts,
//calls both getImage for image & for comments
  getImage: function(id){
    return Api.get('gallery/' +id+'comments/')
      .then (function(json){
        console.log('comments retrieved from Imgur')
        console.log(json);
        this.comment = json.data;
        this.triggerChange();
      }.bind(this));
    },
    triggerChange: function(){
      this.trigger('change', this.comment);
    },
});
