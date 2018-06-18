console.log('Running Code!');

const os = require('os');
const fs = require('fs');

var user = os.userInfo();
fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);