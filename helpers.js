const { writeFileSync, readFileSync } = require('fs'); //Imports the writeFileSync and readFileSync functions from Node.js's built-in fs module. These functions are used to write data to files synchronously (writeFileSync) and read data from files synchronously (readFileSync).

////Purpose: Writes data to a JSON file with specified path and file name. 
function writeJSONFile(path, fileName, data) { //Parameters: path: The directory path where the file will be located. fileName: The name of the JSON file data: The data object that will be written to the file.

  //Stringify Data: Converts the data object into a JSON-formatted string using JSON.stringify(data, null, 2). 
  data = JSON.stringify(data, null, 2); //The null and 2 parameters ensure the JSON output is formatted with 2 spaces of indentation for readability. Converts the data object into a formatted JSON string. The null parameter and 2 as the third parameter are for pretty-printing the JSON with 2 spaces of indentation.

  return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' }); //Write to File: Uses writeFileSync to write the JSON string to the file located at ${path}/${fileName}. The { encoding: 'utf-8' } option specifies UTF-8 encoding for the file. //Writes the JSON string to the file specified by combining path and fileName. Uses utf-8 encoding for the file.

}


//Purpose: Reads JSON data from a file specified by path and fileName. 
function readJSONFile(path, fileName) { // Read File: Uses readFileSync to read the content of the file located at ${path}/${fileName} as a UTF-8 encoded string. Reads the contents of the file specified by path and fileName as a string, using utf8 encoding.
  const data = readFileSync(`${path}/${fileName}`, 'utf8');  //Read File: Uses readFileSync to read the content of the file located at ${path}/${fileName} as a UTF-8 encoded string.

  //Parse JSON: Parses the JSON-formatted string (data) into a JavaScript object using JSON.parse(data).
  return JSON.parse(data); //Converts the JSON string (data) read from the file into a JavaScript object.Return: Returns the JavaScript object containing the parsed JSON data.
}

module.exports = { writeJSONFile, readJSONFile }; // Exports the writeJSONFile and readJSONFile functions as properties of an object. This allows other modules to import and use these functions to write JSON data to files and read JSON data from files.

//These functions are typically used together with data manipulation operations. For example, in the index.js file provided earlier, readJSONFile is used to load existing playlist data, writeJSONFile is used to update the playlist with new songs, and then writeJSONFile is used again to save the updated playlist back to a JSON file. This modular approach is common in Node.js applications for handling data persistence, configuration, and other file-based operations where JSON is used as the data format.

/*
const { writeFileSync, readFileSync } = require('fs');

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data, null, 2);
  return writeFileSync(${path}/${fileName}, data, { encoding: 'utf-8' });
}

function readJSONFile(path, fileName) {
  const data = readFileSync(${path}/${fileName}, 'utf8');
  return JSON.parse(data);
}

module.exports = { writeJSONFile, readJSONFile };

*/