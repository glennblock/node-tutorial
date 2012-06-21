process.on('message', function(m) {
  console.log('CHILD got message:', m);
  process.send("done");
});

process.send({ foo: 'bar' });