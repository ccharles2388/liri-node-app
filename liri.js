// Environment Set Up
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var fs = require('fs');
moment().format('MMMM Do YYYY, h:mm:ss a');
var spotify = new Spotify(keys.spotify);



function getInput() {
    inquirer.prompt([
        {
            name: 'action',
            message: 'What Would You Like To Do Today? You Can Select By Options',
            type: 'list',
            choices: ['con=concert-this', 'spot=spotify-this-song', 'mov=movie-this', 'do=do-what-it-says','end=quit']
        }])
        .then((answers) => {
            switch (answers.action) {
                case 'con=concert-this':
                    helpWithConcert();
                    break;

                case 'spot=spotify-this-song':
                    helpWithSong();
                    break;
                case 'mov=movie-this':
                    helpWithMovie();
                    break;
                case 'do=do-what-it-says':
                    helpWithDowhat();
                    break;
                case 'end=quit':
                    break;
            }
        });
}


function helpWithConcert() {
    inquirer.prompt([
        {
            name: 'artists',
            message: 'What Artist Would You Like To Look Up?',
        }])
        .then((answers) => {
            

            // Constructing a queryURL using the artist name
            var querybandURL = "https://rest.bandsintown.com/artists/" + answers.artists + "/events?app_id=codingbootcamp";
            //  Get Data Via Axios
            axios.get(querybandURL)

                // After data comes back from the request
                .then(function (response) {
                    var results = response.data;
                    if (results.length===0) {
                        console.log( "There is No Concert Information At This Time");
                         getInput();
                    }
                    for (var i = 0; i < results.length; i++) {
                        var event = results[i];
                        
                        console.log(event.lineup);
                        console.log(event.datetime);
                        console.log(event.venue.name);
                        console.log(event.venue.country);
                        console.log(event.venue.city);
                        
                    }

                })
        });
}

function helpWithSong() {
    inquirer.prompt([
        {
            name: 'songs',
            message: 'What Song Information Would You Like To Look Up?',
        }])
        .then((answers) => {
            // console.log(answers.songs);

            //  Get Data Via Spotify Search
            spotify.search({ type: 'track', query: answers.songs}, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
                
                var songresponse=data.tracks.items;
                if (songresponse.length===0) {
                    console.log( "There is No Song Information At This Time");
                     getInput();
                }
               
                   for (var i = 0; i < songresponse.length; i++) {
                   
                    console.log(songresponse[i].artists.map(artist => artist.name)); 
                    
                    console.log(songresponse[i].album.name); 
                    console.log(songresponse[i].name); 
                    console.log(songresponse[i].preview_url); 
                    console.log("--------------------------------");
               
            }
            // console.log(songresponse[0]);
              });
                
                
              
        });
}

function helpWithMovie() {
    
    inquirer.prompt([
        {
            name: 'movies',
            message: 'What Movie Would You Like To Look Up?',
        }])
        .then((answers) => {
            // console.log(answers.movies);
            // Omdbapi Movie Source
            // Constructing a queryURL using the movies name and limit 1 movie
            var querymoviesURL = " http://www.omdbapi.com/?i=tt3896198&apikey=9341ab9f" + answers.movies +  "&limit=1";
            console.log(answers); 
            //  Get Data Via Axios
            axios.get(querymoviesURL)

                // After data comes back from the request
                .then(function (response) {
                    var movresults = response.data;
                    if (movresults.length===0) {
                        console.log( "There is No Movie Information At This Time");
                         getInput();
                    }
                    for (var i = 0; i < movresults.length; i++) {
                        var movevent = movresults[i];
                        console.log(movevent);
                        
                        
                    }

                })
        });
}

function helpWithDowhat() {
   
            //  Get Data Via Spotify Search
            spotify.search({ type: 'track', query: "I Want it That Way"}, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
                
                var songresponse=data.tracks.items;
                if (songresponse.length===0) {
                    console.log( "There is No Song Information At This Time");
                     getInput();
                }
               
                   for (var i = 0; i < songresponse.length; i++) {
                   
                    console.log(songresponse[i].artists.map(artist => artist.name)); 
                    
                    console.log(songresponse[i].album.name); 
                    console.log(songresponse[i].name); 
                    console.log(songresponse[i].preview_url); 
                    console.log("--------------------------------");
               
            }
            // console.log(songresponse[0]);
              })};
                
                
              

getInput();