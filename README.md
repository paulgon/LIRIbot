# LIRIbot

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

What Each Command Should Do:

## node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Artist`s Name
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")

![concert-this screenshot](https://user-images.githubusercontent.com/50177334/60771654-e351fc00-a0b0-11e9-9a1b-d0f672b4a660.png)
## node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
![spotify-this-song yesterday](https://user-images.githubusercontent.com/50177334/60771661-e3ea9280-a0b0-11e9-8a2a-215632333367.png)

If no song is provided then your program will default to "The Sign" by Ace of Base.

![spotify-this-song blank](https://user-images.githubusercontent.com/50177334/60771659-e351fc00-a0b0-11e9-9980-20a592d1ce66.png)
## node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
![movie-this elf screenshot](https://user-images.githubusercontent.com/50177334/60771658-e351fc00-a0b0-11e9-8518-72fdce63d7aa.png)


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![movie-this ss](https://user-images.githubusercontent.com/50177334/60771656-e351fc00-a0b0-11e9-8645-d32da720391f.png)
## node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

![do-what-it-says screenshot](https://user-images.githubusercontent.com/50177334/60771653-e351fc00-a0b0-11e9-8974-d16a5f83bfb6.png)

