require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
let keys = require("./keys.js");


const spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let userInput = process.argv.slice(3).join(" ");


//conditions
if (command === 'spotify-this-song') {
    runSpotify(userInput)
}

if (command === 'movie-this') {
    runOmdb(userInput)
}

if (command === "concert-this") {
    runBandsInTown(userInput)
}

if (command === "do-what-it-says") {
    console.log(userInput);
    doWhatItSays(userInput);
}

function runSpotify(song) {
    if (song === "") {
        song = "The Sign Ace Of Base";
    }
    spotify.search({ type: 'track', query: song, limit: "1" }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //artist
        console.log("Artist name is: " + data.tracks.items[0].album.artists[0].name)
        //song
        console.log("The song name is: " + data.tracks.items[0].name)
        //album
        console.log("The album name is: " + data.tracks.items[0].album.name)
        //spotify url
        console.log("The spotify URL is: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
    });
}


function runOmdb(movie) {
    if (!movie) {
        movie = "Mr. Nobody";
    }
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // Make a request for a user with a given ID
    axios.get(queryURL)
        .then(function (response) {
            // handle success
            console.log(response.data);
            // console.log('Movie Title: ' + response.data.Title);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function runBandsInTown(artist) {
    var bandQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandQueryUrl).then(
        function (response) {

            console.log("Artist: " + artist);
            console.log("Venue Name: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country);
            console.log("Date of Event: " + moment(response.datetime).format("MM/DD/YYYY"));

        }
    )
}


fs.readFile('random.txt', 'utf8', function (err, rawData) {
    if (err) {
        return console.log(err);
    }
    data = rawData.split('\n');
});

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (err, data) {
    var txt = data.split(',');
        if (err) {
            return console.log(err);
        }
        runSpotify(txt[1]);
    });
}
