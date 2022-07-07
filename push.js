#!/usr/bin/env node
const exec = require("child_process").execSync;

var argvs = process.argv.slice(2);
console.log('s', argvs)
if(!argvs.length) {
    argvs = `feat: ${new Date().getTime()}`;
} else {
    argvs = `${argvs.slice(argvs.indexOf('-m')+1).join(' ')}`
}
var bash = `git add . && git commit -m '${argvs}' && git push origin master`;
console.log('=======>', bash);
exec(bash);

