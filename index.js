const { createFakeSong, createFakeSongs } = require("./songs");
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
  const playlist = readJSONFile('./data', 'playlist.json') || [];
  const numSongs = process.argv[3] ? parseInt(process.argv[3], 10) : 1;
  const newSongs = numSongs === 1 ? [createFakeSong()] : createFakeSongs(numSongs);
  playlist.push(...newSongs);
  writeJSONFile('./data', 'playlist.json', playlist);
  console.log(playlist);
}

run();


/*

npm start
npm run create
npm run create 3

//echo "[]" > data/playlist.json
This commandline was used to create playlist.json

const { createFakeSong, createFakeSongs } = require('./songs');

function run() {
  const numSongs = process.argv[3] ? parseInt(process.argv[3], 10) : 1;
  const songs = numSongs === 1 ? createFakeSong() : createFakeSongs(numSongs);
  console.log(songs);
}

run();



*/



/*
Lesson Objectives
By the end of this lesson

Define CRUD and how it relates to coding operations.
Create some data using Faker.js.
Use the built-in fs module to read and write JSON.
Use the methods JSON.parse() and JSON.stringify() to translate data from a file to a datatype that JavaScript can more easily manipulate.
Read and create some data from and to a file.

Guiding Questions

1. What does CRUD stand for?
//Create, Read, Update, Delete 
// 4 basic operations for managing data

2. What are the five common things to do with data?
Create: Adding new data.
Read: Retrieving existing data.
Update: Modifying existing data.
Delete: Removing data.
Query: Searching or filtering data.

3. Create a new Node.js project for playlists.
npm init -y  creates a new Node.js project

4. Add the package faker (version 7) as a dev dependency.
Dont use the following: npm install --save-dev @faker-js/faker@7  (this one is depreciated)

Use this instead: npm install @faker-js/faker@latest --save-dev


5. Why add faker as a dev dependency instead of a regular dependency?
Faker is used for generating test data, which is typically only needed during development and testing, not in production. Hence, it should be added as a dev dependency. Before a new app or feature goes live (becomes available to the users), it's crucial to eliminate as many bugs as possible through testing. And developers usually generate fake data to test various scenarios instead of trying to collect actual data for testing.

6. Why select a version when installing faker (or another package)?
Selecting a version ensures consistency across different environments by preventing potential issues caused by changes in newer versions of the package.

7. What is the purpose of the faker package?
The faker package is used to generate fake data for testing and development purposes.

8. Create a start script that runs an index.js file.

"scripts": {
  "start": "node index.js"
}


9. A playlist is made of songs. What fields should a song have?
id
title
artist
album
duration
genre
releaseDate


10. What faker data can you use to simulate fake song data?
title: faker.music.songName()
artist: faker.name.findName()
album: faker.lorem.words()
duration: faker.datatype.number({ min: 180, max: 360 }) (seconds)
genre: faker.music.genre()
releaseDate: faker.date.past()

11. Write a function to create a single fake song.
const { faker } = require('@faker-js/faker');

function createFakeSong() {
  return {
    id: faker.datatype.uuid(),
    title: faker.music.songName(),
    artist: faker.name.findName(),
    album: faker.lorem.words(),
    duration: faker.datatype.number({ min: 180, max: 360 }),
    genre: faker.music.genre(),
    releaseDate: faker.date.past(),
  };
}

12. Where should you write this function?
This function should be written in a file dedicated to handling song-related functionalities, such as songs.js.

13. What should you name this function?
createFakeSong

14. Can you explain why you put your function where you did and the thought behind the name?
The function is placed in songs.js to maintain the separation of concerns, ensuring that all song-related functions are in one place. The name createFakeSong clearly describes its purpose, making the code more readable.

15. When it comes to coding, what are design decisions? What does it mean to defend your design?
Design decisions involve choosing how to structure your code, what patterns to use, and how to implement functionality. Defending your design means being able to explain and justify why you made those decisions, considering factors like maintainability, performance, and scalability.
Thinking about the pros and cons and explaining why you chose to code something a particular way is essential to consider and be able to explain. For now, make it separate.

16. Why is it essential to think about your code in terms of design?
Thinking about code in terms of design ensures that it is organized, maintainable, and scalable. Good design improves readability, reduces complexity, and makes it easier to extend and modify the code in the future.

17. Create another function to create multiple fake songs. Use user input to determine the number of songs to create.

function createFakeSongs(number) {
  const songs = [];
  for (let i = 0; i < number; i++) {
    songs.push(createFakeSong());
  }
  return songs;
}



18. Create scripts that allow a user to run `npm run create` to create a single song and `npm run create 3` to create 3 songs.
"scripts": {
  "start": "node index.js",
  "create": "node index.js create"
}


//index.js
const { createFakeSong, createFakeSongs } = require('./songs');

function run() {
  const numSongs = process.argv[3] ? parseInt(process.argv[3], 10) : 1;
  const songs = numSongs === 1 ? createFakeSong() : createFakeSongs(numSongs);
  console.log(songs);
}

run();


19. Create a folder to store data files.
mkdir data

20. Add the fs module to your project. (Where?)
The fs module is a built-in Node.js module, so you don't need to install it. You should require it in the file where you need to read from or write to the filesystem. In this case //helper.js

21. What does fs stand for?
File System

22. What does fs allow you to do?
The fs module allows you to interact with the file system, enabling you to read, write, and manage files and directories.

23. What is the separation of concerns in terms of code?
Separation of concerns is a design principle that involves organizing code into distinct sections, each responsible for a specific functionality. This makes the code more modular, easier to understand, and maintain.
Thinking about the pros and cons and explaining why you chose to code something a particular way is essential to consider and be able to explain. For now, make it separate.

24. Is it important for a small application you are building now?
Yes, even in small applications, separation of concerns improves readability and maintainability. It also makes it easier to scale the application in the future.
It's a small app. You are probably not going to make this particular app much bigger. However, the concern of creating data is different from the concern of reading and writing a file. So do you add the file write functionality into randomProductFactory(), or do you separate it? Thinking about the pros and cons and explaining why you chose to code something a particular way is essential to consider and be able to explain. For now, make it separate.


25. What are the pros of putting your code into different files? What are the cons?
Pros:
Improved organization and readability.
Easier to manage and maintain.
Facilitates code reuse.
Enhances modularity and separation of concerns.

Cons:
Can increase complexity in managing file imports/exports.
May introduce overhead in understanding how different files interact.

26. What are the pros of combining the function to create songs and immediately write them to a file? What are the cons?
Pros:
Simplicity in having a single function handle both creation and saving.
Fewer steps for the user to perform.

Cons:
Reduces modularity and separation of concerns.
Makes the function less reusable for cases where saving to a file is not needed.
Harder to test and debug

27. What datatype does fs accept as data?
fs.writeFileSync() only accepts strings.
The fs module accepts data as a string or a buffer when writing to a file.
Short for file system and is a built-in Node module allowing you to read and write from files.

28. When a file is read and stored in a JavaScript variable, what kind of datatype is it?
When a file is read, the data is stored as a string or a buffer, depending on the encoding specified.
fs.writeFileSync() only accepts strings.

29. How can you change a JSON string into an object?
Use JSON.parse() to convert a JSON string into an object.

30. How can you change an object into JSON?
Use JSON.stringify() to convert an object into a JSON string.

31. Update your application so that every time new songs are made, they are added to a playlist collection (array of objects).

const { createFakeSong, createFakeSongs } = require('./songs');
const { writeJSONFile, readJSONFile } = require('./helpers');

function run() {
  const playlist = readJSONFile('./data', 'playlist.json') || [];
  const numSongs = process.argv[3] ? parseInt(process.argv[3], 10) : 1;
  const newSongs = numSongs === 1 ? [createFakeSong()] : createFakeSongs(numSongs);
  playlist.push(...newSongs);
  writeJSONFile('./data', 'playlist.json', playlist);
  console.log(playlist);
}

run();



32. Update your application so that every time new songs are made, they are saved to a playlist.json file.





*/