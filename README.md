# liri-node-app
LIRI is a Server Side Language Interpretation and Recognition Interface. 
LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies in order to provide a back end data source of information on demand for marketing and current local user app updates.
To retrieve the data that will power this app, send requests will be made using the axios package to the Bands in Town, Spotify and OMDB APIs. 
Current Data Source Overview:
    Node-Spotify-API
    Axios-Axios will grab data from the OMDB API and the Bands In Town API
    Moment
    DotEnv
File Structures:
    Root Folder 
    - LIRI-NODE-APP
    -|[.vscode]
        |launch.json - Current Code Section 10-12-2019 
        "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/index.js"
        }
                    ]
        }
        |setting.json - Current Code Section 10-12-2019
            {
            "files.exclude": {
                ".history": true
            },
            "eslint.autoFixOnSave": true
            }
    -|[node_modules]-must be installed for current versions (npm install)
    -|.env- api key information (user must supply owner creditals)
        # Spotify API keys
            SPOTIFY_ID=your-spotify-id
            SPOTIFY_SECRET=your-spotify-secret

    -|.gitignore - ignores libraries,custom attributes and owner api key if     using git hub:
            node_modules
            .DS_Store
            .env

    -|keys.js - Current Code Section 10-12-2019
        console.log('this is loaded');
        exports.spotify = {
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        };

    -|liri.js - Current Environment Test Code Section 10-12-2019
        require("dotenv").config();
        var keys = require("./keys.js");
        var Spotify = require("node-spotify-api");
        var spotify = new Spotify(keys.spotify);
        console.log(spotify);

    -|package-lock.json - Current Code Section 10-12-2019 - See Raw File

    -|package.json - Current Code Section 10-12-2019
        {
        "name": "liri-node-app",
        "version": "1.0.0",
        "description": "SIRI simulation app Clearly state the problem the app is trying to solve (i.e. what is it doing and why) Give a high-level overview of how the app is organized Give start-to-finish instructions on how to run the app Include screenshots, gifs or videos of the app functioning Contain a link to a deployed version of the app Clearly list the technologies used in the app State your role in the app development",
        "main": "keys.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/ccharles2388/liri-node-app.git"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "bugs": {
            "url": "https://github.com/ccharles2388/liri-node-app/issues"
        },
        "homepage": "https://github.com/ccharles2388/liri-node-app#readme",
        "dependencies": {
            "axios": "^0.19.0",
            "dotenv": "^8.1.0",
            "node-spotify-api": "^1.1.1"
        },
        "devDependencies": {
            "eslint": "^6.5.1",
            "eslint-config-google": "^0.14.0"
        }
        }

    -|random.txt - Current Code Section 10-12-2019
        spotify-this-song,"I Want it That Way"

    -|README.md  - Current Code Section 10-12-2019 
    
User start-to-finish instructions on how to run the app
    User Runs App - noode liri.js
    User is presented with a event inquirer and options:
        ? What Would You Like To Do Today? You Can Select By Options (Use arrow keys)
            > con=concert-this 
              spot=spotify-this-song 
              mov=movie-this 
              do=do-what-it-says 
    User makes selection by using arrows keys to make event choice
    Upon Selection User Is Presented With Information :
        con=concert-this ( Shows Concerts For Artist Inputed)
        spot=spotify-this-song ( Shows Songs For Artist Inputed)
        mov=movie-this ( Shows Movies For Movie Query Inputed)
        do=do-what-it-says ( Shows Txt File Information In File)
Include screenshots, gifs or videos of the app functioning
Deployed version of the app - https://github.com/ccharles2388/liri-node-app/blob/master/liri.js

Technologies used in the app :
    node and node modules
    inquirer for user prompts
    moment for date formatting
    axios for data send and recieved responses
    API Key Query for data fetching
    Javascript 
    Json 
    eslint for customized configurations
    Git Hub

Curtis Charles - Key Creative Developer And Programmer -