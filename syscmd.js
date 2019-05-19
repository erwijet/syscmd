// syscmd.js
// (c) 2019 Tyler Holewinski
// http://www.github.com/erwijet/syscmd
// http://www.nodejs.org/syscmd

const exec = require('child_process').exec;

function puts(err, stdo, stderr) {
    if (err)
        throw err;
    console.log(stdo);
}

function pre_execute(cmd, callback) {
    if (typeof(cmd)!='string')
        callback(new Error('Command must be type "String"'), '', null);
    exec(cmd, callback);
}

/**
 * Execute the given command as a shell or DOS command on the active machine
 * 
 * @param {String} cmd
 * @param {function(Error, String | Buffer, String | Buffer)} stdredirect 
 */
function execute(cmd, stdredirect) {
    pre_execute(cmd, stdredirect || puts);
}

module.exports = execute;