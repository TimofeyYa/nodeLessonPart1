const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{ 
    res.writeHead(200, {
        'Content-Type':'text/html; charset=utf-8'
    })

    console.log(path.extname(req.url));
    let pageName;
    if (req.url == '/'){
        pageName = '/main'
    } else {
        pageName = req.url;
    }

    
    console.log(path.join(__dirname, 'pages', `.${pageName}.html`));
    if (path.extname(req.url) == ''){
    fs.readFile(path.join(__dirname, 'pages', `.${pageName}.html`), 
    'utf-8',
    (err,data)=>{
        if (err) throw data;

        res.end(data);
    })
    }

    });

server.listen(3000, ()=>{
    console.log("server ready!")
})