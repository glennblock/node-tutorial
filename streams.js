var https = require('https');
var util = require('util');

req = https.get({host:'api.github.com', path:'/users/glennblock/repos'}, 
  function(res) {
    res.pipe(process.stdout);
  }
);

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});