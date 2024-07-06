const { writeFileSync, readFileSync } = require('fs');

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data, null, 2);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
}

function readJSONFile(path, fileName) {
  const data = readFileSync(`${path}/${fileName}`, 'utf8');
  return JSON.parse(data);
}

module.exports = { writeJSONFile, readJSONFile };
