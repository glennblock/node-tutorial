var fs = require('fs');
readWholeFileAsString();
readWholeFileAsBuffer();
readFileAsStream();

function readWholeFileAsString() {
  fs.readFile('./file2.txt', 'utf8', function(err, data) {
    if (err) throw err;
      console.log(data);
  });
}

function readWholeFileAsBuffer() {
  fs.readFile('./file2.txt', null, function(err, data) {
    if (err) throw err;
      console.log(data + '\n');
  });	
}

function readFileAsStream() {
  fs.createReadStream('.file2.txt', {encoding:'utf8', bufferSize:5}).
  on('data', function(chunk) {
	console.log('data:' + chunk);
  }).
  on('error', function(err) {
	throw err;
  });
}

