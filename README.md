# Liri-node-app



## Motivation
This is a project for UCF's Coding bootcamp class where we are learning to implement node.js.

## Overview
For this assignment, I will be making a LIRI Bot. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## What Each Command Does

### <code>node liri.js *concert-this* '<artist/band name here>'</code>
##### This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?       app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
  - Name of the venue
  - Venue location
  - Date of the Event (use moment to format this as "MM/DD/YYYY")

### <code>node liri.js *spotify-this-song* '&lt;song name here&gt;' </code>
##### This will show the following information about the song in your terminal/bash window
- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

### <code>node liri.js *movie-this* '&lt;movie name&gt;'</code>
#### Shows the following information in terminal/bash.
- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.
- Rotten Tomatoes URL.
- Or if no movie is passed through, it will default to "Mr. Nobody"

### <code>node liri.js *do-what-it-says*</code>
- Takes the text from random.txt and runs the song through spotify-this-song command

## NPM Dependencies
* dotenv
* Bands-in-town
* node-spotify-api
* moment.js
* request
* fs
* axios


## API Integration
* Bands-in-town
* Spotify
* OMDB


