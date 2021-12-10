const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname, 'wow'), arr =>{
    if (arr) throw arr;

    console.log('wow');
})