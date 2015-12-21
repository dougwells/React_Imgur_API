var Api=require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  getTopics: function(){
    return Api.get('topics/defaults')
    .then (function(json){
      this.topics = json.data;
      this.triggerChange();
    }.bind(this));
  },

//"trigger" is Reflux method.
//First argument is a string which is the name of the event triggered
//Second argument is the information shared when even is triggered
//Entire application knows/hears when event 'change' is triggered
  triggerChange: function(){
    this.trigger('change', this.topics);
  }
});
