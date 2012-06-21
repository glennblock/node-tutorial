console.log('\nArguments');
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

console.log('\nEnvironment');
console.log(process.env);
console.log('\nWorking directory' + process.cwd());
console.log("\nEnter some data");

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
  if (text === '\n')
    process.stdin.pause();
  else
	console.log('entered:' + text);

})

process.nextTick(function() {
  console.log("\ninvoked after next tick");
});
console.log("before next tick");


