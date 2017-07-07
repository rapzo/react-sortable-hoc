#!/usr/bin/env node
'use strict';

var execSync = require('child_process').execSync;
var stat = require('fs').stat;

function exec(command) {
    execSync(command, {
        stdio: [0, 1, 2]
    });
}

stat('dist', function(error, stat) {
    if (process && process.env && process.env.npm_config_only !== 'dev') {
        exec('npm install --only=dev');
    }

    if (error || !stat.isDirectory()) {
        exec('npm run build');
    }
});