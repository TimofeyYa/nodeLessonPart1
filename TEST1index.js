const http = require('http');
const path = require('path');
const fs = require('fs');


let serverData;

const server = http.createServer((req,res) =>{
    res.write(serverData);
    res.write('Просто пушка2');
    res.end();
})


fs.readFile(path.join(__dirname, 'refs', 'test.html'),
'utf-8',
(err, data) =>{
    if(err) throw err;

    serverData = data;
})


server.listen(3000, ()=>{
    console.log('Server Started...');
})