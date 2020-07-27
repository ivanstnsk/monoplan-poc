var fs = require('fs');

var filePath = 'README.md';

fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var version = process.env.TRAVIS_BUILD_NUMBER || 'UNKNOWN_BUILD';
  var result = data.replace(/CI last build: \d+./gi, `CI last build: ${version}.`);

  console.log(result);

  fs.writeFile(filePath, result, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Set new CI build version: ', version);
  });
});