require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
console.log(spotify);
var artist = "john legend"


 // Constructing a queryURL using the artist name
 var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

 
 axios.get(queryURL)
 // After data comes back from the request
 .then(function (response) {
     console.log(queryURL);

     var results = response.data;
     for (var i = 0; i < results.length; i++) {
        var event = results[i];
        console.log(event);
             }       
 })