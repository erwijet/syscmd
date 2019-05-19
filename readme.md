# Syscmd
A small package that allows for shell commands to be executed right from Node 👩‍💻

[![npm version](http://img.shields.io/npm/v/syscmd.svg?style=flat)](https://npmjs.org/package/syscmd "View this project on npm")
[![NPM Downloads](https://img.shields.io/npm/dt/syscmd.svg)](http://npmjs.com/syscmd)<br>
[![GitHub version](https://badge.fury.io/gh/erwijet%2Fsyscmd.svg)](https://github.com/erwijet/syscmd.js)
[![GitHub issues](https://img.shields.io/github/issues/erwijet/syscmd.svg)](https://GitHub.com/erwijet/syscmd/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/erwijet/syscmd.svg)](https://GitHub.com/erwijet/syscmd/pull/)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)<br>
[![RunKit state](https://img.shields.io/badge/RunKit-Passing-green.svg)]()
[![Gitter](https://badges.gitter.im/syscmd/community.svg)](https://gitter.im/syscmd/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![GitHub watchers](https://img.shields.io/github/watchers/erwijet/syscmd.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/erwijet/syscmd/watchers/)
[![GitHub stars](https://img.shields.io/github/stars/erwijet/syscmd.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/erwijet/syscmd/stargazers/)


## Installation
```$ npm i --save syscmd```<br>
```javascript
const syscmd = require('syscmd');
```

## Usage

### ⭐ Standard Usage
```javascript
const syscmd = require('syscmd');
syscmd('echo Hello!');

// Output: 
// HellO!
```

### ⭐ Redirect Output
```javascript
const syscmd = require('syscmd');
syscmd('ls -la', (err, stdout, stderr) => {
  if (err)
    throw err;
  // Work with stdout here as output
});
```

### ⭐ No Output

```javascript
const syscmd = require('syscmd');
syscmd('unzip archive.zip -d archive/', () => null);
```

------

**syscmd** © 2019, Tyler Holewinski. Released under the [MIT] License.<br>
Authored and maintained by Tyler Holewinski with help from contributors.

> GitHub [@erwijet](https://github.com/erwijet) &nbsp;&middot;&nbsp;
> Instagram [@erwijet](https://instagram.com/erwijet)

[MIT]: http://mit-license.org/