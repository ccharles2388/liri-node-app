// Environment Set Up
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
moment().format('MMMM Do YYYY, h:mm:ss a');
var spotify = new Spotify(keys.spotify);

// Prompt What Would You Like To Do?
// Display Options - Return For All Choices - User Not Sure
// User inputs choice by typing initial letters
// based upon letters functions are called 
// con=concert-this | spot=spotify-this-song | mov=movie-this | do=do-what-it-says
// If enter take user through all options
// Data Store Options Firebase | Arrays - Need To Be Scalable
// con=concert-this
// 
// 
// 
// spot=spotify-this-song
// 
// 
// mov=movie-this
// 
// 
// do=do-what-it-says

function getInput() {
    inquirer.prompt([
        {
            name: 'action',
            message: 'What Would You Like To Do Today? You Can Select By Options',
            type: 'list',
            choices: ['con=concert-this', 'spot=spotify-this-song', 'mov=movie-this', 'do=do-what-it-says']
        }])
        .then((answers) => {
            switch (answers.action) {
                case 'con=concert-this':
                    helpWithConcert();
                    break;

                case 'spot=spotify-this-song':
                    helpWithSong();
                    break;
                case 'con=concert-this':
                    
                    break;
                case 'con=concert-this':

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
            console.log(answers.artists);

            // Constructing a queryURL using the artist name
            var querybandURL = "https://rest.bandsintown.com/artists/" + answers.artists + "/events?app_id=codingbootcamp";
            //  Get Data Via Axios
            axios.get(querybandURL)

                // After data comes back from the request
                .then(function (response) {

                    var results = response.data;
                    for (var i = 0; i < results.length; i++) {
                        var event = results[i];
                        console.log(event);
                        console.log(event.venue.city);
                        
                    }
                })
        });
}
/*
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
*/
getInput();