var Reflux = require('reflux');

//Note pass createActions an ARRAY, NOT an object
//Reflux creates Actions objects.
// Properties w/names of strings in ARRAY
//call any of Actions properties/methods via Actions.xx
module.exports = Reflux.createActions([
  'getTopics',
  'getImages'

]);
