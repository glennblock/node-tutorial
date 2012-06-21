var util = require('util'),
    child_process = require('child_process'),
    os = require('os'),
    child;

console.log(os.platform());

exec();
spawn();
fork();

function exec() {
	var cmd = os.platform() == 'win32' ? 'dir' : 'ls';
	console.log('exec Command:'  + cmd + '\n');
	child = child_process.exec(cmd,
	  function (error, stdout, stderr) {
	    console.log('exec:stdout:\n' + stdout);
	    console.log('exec:stderr:\n' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
}

function spawn() {
	var cmd, args;

	if (os.platform() == 'win32') {
		cmd = 'cmd';
		args = ['/k','dir'];
	}
	else {
		cmd = 'ls';
		args = [];
	}

	console.log('spawn command:' + cmd + ' ' + args + '\n');
	var proc = child_process.spawn(cmd, args);

	proc.stdout.on('data', function (data) {
	  console.log('spawn:stdout:\n' + data);
	});

	proc.stderr.on('data', function (data) {
	  console.log('spawn:stderr:\n' + data);
	});

	proc.on('exit', function (code) {
	  console.log('spawn:child process exited with code ' + code + '\n');
	});
}

function fork() {
	console.log('fork');
	var forked = child_process.fork(__dirname + '/child_process_forked.js');
	forked.on('message', function(m) {
  		console.log('PARENT got message:', m);
  		if(m === "done") {
  			forked.kill();
  			process.exit();
  		}
	});

	forked.send({ hello: 'world' });
}


