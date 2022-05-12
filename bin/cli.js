#! /usr/bin/env node
const {execSync} = require('child_process');

function runCommand(command){
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }
    catch (e){
        console.error(`Failed to execute ${command}`, e)
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/faroke/chrome-extension ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
console.log('\x1b[33m%s\x1b[0m', "Hi, i'm gonna build this starter kit for you !")
console.log('\x1b[33m%s\x1b[0m',`Coling the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);
console.log('\x1b[33m%s\x1b[0m',`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);
console.log('\x1b[34m%s\x1b[0m', "Congrats !");
console.log('');
console.log('\x1b[36m%s\x1b[0m', `cd ${repoName} && npm run build`)
/*
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Please enter at least 2 numbers');
    process.exit(1); //an error occurred
}

const total = args.reduce((previous, current) => parseFloat(current) * parseFloat(previous));

if (isNaN(total)) {
    console.error('One or more arguments are not numbers');
    process.exit(1); //an error occurred
}

console.log(total);
process.exit(0); //no errors occurred
 */