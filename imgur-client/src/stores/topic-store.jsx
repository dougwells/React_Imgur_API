var Api=require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
//listenables - given to us by Reflux
//if any of the Actions w/in Actions get called
//and the current file has a method w/same name, call that method
//IE, actions.jsx (assigned to var Actions above), has 'getTopics'

  listenables: [Actions],

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
