var fs = require('fs');
fs.unlink('./file*.txt');

fs.writeFile('./file1.txt', 'Some text\n', function(err) {
	if (err) throw err;
	console.log('Wrote file1.txt');
	writeFile2();
}); 

function writeFile2() {
	var os = fs.createWriteStream('./file2.txt');
	os.write('Some text\n');
	os.write('Some text\n');
	console.log('Wrote file2.txt');
	appendFile2();
}

function appendFile2() {
	var os = fs.createWriteStream('./file2.txt', {flags:'a', start:20});
	os.write('Appended text\n');
	console.log('Appended to file2.txt');
}



