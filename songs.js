const { faker } = require("@faker-js/faker"); //Imports the faker object from the @faker-js/faker library. faker is a popular library for generating fake data such as names, addresses, text, and more.


// Function to create a single fake song object from random data
function createFakeSong() {
  const song = {
    title: faker.lorem.words(), //to generate random strings for the song's title, artist, and album.
    artist: faker.name.fullName(),
    album: faker.lorem.words(),
    genre: faker.helpers.arrayElement(['Rock', 'Pop', 'Hip-hop', 'Jazz', 'Electronic']),
    duration: `${faker.datatype.number({ min: 1, max: 10 })}:${String(faker.datatype.number({ min: 0, max: 59 })).padStart(2, '0')}`,
    releaseYear: faker.date.past({ years: 30 }).getFullYear(),
    url: faker.internet.url(),
    coverArt: faker.image.url(),
    lyrics: faker.lorem.paragraphs(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    playCount: faker.datatype.number({ min: 0, max: 1000 }),
    dateAdded: faker.date.between({ from: '2020-01-01', to: '2022-12-31' })
  };
  return song;  //Returns the song object containing all the generated properties
}

// Function to create an array of fake songs. Purpose: Generates an array of number fake song objects.
function createFakeSongs(number) {
  const songs = [];  //Initializes an empty array songs.
  for (let i = 0; i < number; i++) { //Uses a for loop to call createFakeSong() number times, pushing each generated song object into the songs array.
    songs.push(createFakeSong());  //Returns the array songs containing all the generated fake songs.
  }
  return songs;
}

// Exporting the functions to be used in other modules
module.exports = { createFakeSong, createFakeSongs }; //Exports the createFakeSong and createFakeSongs functions, making them accessible for use in other modules that import songs.js

//The songs.js file demonstrates how to use the faker library to generate realistic-looking fake song data. It provides functions to create both a single fake song (createFakeSong()) and multiple fake songs (createFakeSongs(number)). This modular approach allows easy integration of fake data generation into larger applications, such as generating test data or populating databases with mock content.