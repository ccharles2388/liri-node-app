// Environment Set Up
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
moment().format('MMMM Do YYYY, h:mm:ss a');
var spotify = new Spotify(keys.spotify);

var artist = "john legend"

 // Constructing a queryURL using the artist name
 var querybandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
 //  var querymovieURL =" http://www.omdbapi.com/?i=tt3896198&apikey=9341ab9f"
 //  var queryposterURL =" http://img.omdbapi.com/?i=tt3896198&apikey=9341ab9f"
 
 //  Get Data Via Axios
 axios.get(querybandURL)

 // After data comes back from the request
 .then(function (response) {

     var results = response.data;
     for (var i = 0; i < results.length; i++) {
        var event = results[i];
        console.log(event);
             }       
 })