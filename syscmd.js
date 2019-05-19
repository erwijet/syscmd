// archive.js
// (c) 2019 Tyler Holewinski
// http://www.github.com/erwijet

const sys = require('sys');
const exec = require('child_process').exec;

function puts(err, stdo, stderr) {
    if (err)
        throw err;
    sys.puts(stdo);
}

module.exports = cmd => exec(cmd, puts);