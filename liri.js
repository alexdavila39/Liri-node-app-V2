require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var request = require("request");

var axios = require("axios");

var fs = require("fs")

var moment = require("moment");

//-----------------------------------------


//-----------------------------------------

var concertDetails = function(artist){
    
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
    var concerts = response.data;
    // console.log(response.data)
    for(var i = 0; i < concerts.length; i++){
    
    var msg="Name of Venue: " + concerts[i].venue.name + "\nLocation: "+ concerts[i].venue.city;
    if (concerts[i].venue.region != "") {
        msg += ", " + concerts[i].venue.region
    }
    msg += ", " + concerts[i].venue.country;
    var time = moment(concerts[i].datetime).format("MMMM Do YYYY, h:mm:ss a");
    console.log(msg +"\nTime: "+ time);
    console.log("------------------------------------------------------------------")
    
     }
     
})


}


// spotify section
var getArtistNames = function (artist) {
    return artist.name;
}

var getMeSpotify = function (songName) {

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("artist(s): " + songs[i].artists.map(
                getArtistNames));
            console.log("song name : " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);
            console.log("-------------------------------------------------")
        }
    });
}

var getMovie = function(movieName){

request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&apikey=trilogy", function (error, response, body) {
    if(!error && response.statusCode == 200){

   

  var jsonData = JSON.parse(body);

  console.log("Title: " + jsonData.Title);
  console.log("Year: " + jsonData.Year);
  console.log("Rated: " + jsonData.Rated);
  console.log("IMDB Rating: " + jsonData.imdbRating)
  console.log("Country: " + jsonData.Country);
  console.log("Language: " + jsonData.Language);
  console.log("Plot: " + jsonData.Plot)
  console.log("Actors: " + jsonData.Actors);
  console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
  console.log("--------------------------------------------------------")
    }
});
}

var doWhatItSays = function(){

fs.readFile('random.txt','utf8', function(err, data){
    if (err) throw err;
    var dataArr = data.split(",");
    pick(dataArr[0],dataArr[1]);

    console.log(data);
  });
}
//switch
var pick = function (caseData, functionData) {
    switch (caseData) {
        case "help":
        console.log("Welcome! My name is LIRI and i'm here to help you search your favorite Music and movies.");
        console.log("Here is a list of my commands")
        console.log("concert-this" + "\nspotify-this-song" + "\nmovie-this");
        break;
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "concert-this":
            concertDetails(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't know this.")
    }

    var msg = caseData;
    if(functionData){
        msg += ", " + functionData
    }
    fs.appendFile("log.txt", msg + "\n ", function(err){
        if(err){
            console.log(err)
        }
    })

}


var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo)
};

var cmd = process.argv[2];

if (!cmd) {
    cmd = "help"
}

runThis(cmd, process.argv[3]);





