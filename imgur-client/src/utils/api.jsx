//api.jsx (this file) is where we will put code for
//interacting with Imgur.com's API

var Fetch = require('whatwg-fetch');
var Secret = require('./secret');
//rootUrl = URL for Imgur API
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = Secret.imgurClientId;

//making a request w/fetch returns a "promise" object
// we use promises for code that might take a long time to complete
//when response is complete, Promise calls whatever function we attach to .then
//response object itself is not useful to us.  Must call response.json() method
module.exports = window.api = {
  get: function(url){
    return fetch(rootUrl + url, {
        headers: {
          'Authorization': "Client-ID " + apiKey
        }
      })

//.then() executes once the "fetch" is complete (data downloaded)
//response.json() returns object "data" which holds useful data for us
//note that the 2nd .then is "attached" to the 1st. Runs after 1st complete
      .then(function(response){
        return response.json()
      });
      // .then(function(data){
      //   console.log(data);
      // });
  }
}

//commented out 2nd .then b/c we will call "data" when we run Api.get('')
//ie ...
// Api.get('topics/default')
// .then (function(data){
//      ...do something ...
// })
