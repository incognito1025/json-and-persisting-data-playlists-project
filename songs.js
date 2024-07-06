// songs.js
const { faker } = require("@faker-js/faker");

function createFakeSong() {
  const song = {
    title: faker.lorem.words(),
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
  return song;
}

function createFakeSongs(number) {
  const songs = [];
  for (let i = 0; i < number; i++) {
    songs.push(createFakeSong());
  }
  return songs;
}

module.exports = { createFakeSong, createFakeSongs };
