const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname, 'wow'), arr =>{
    if (arr) throw arr;

    fs.readFile(path.join(__dirname, 'test.html'), 
    'utf-8',
    (err,data) =>{
        if (err) throw arr;

        fs.writeFile(path.join(__dirname, 'wow', 'testHere.odt'),
            "Это просто фантастика!",
            err =>{
                if (err) throw arr;

                console.log('Всё успешно')
            }
        )
    });
    console.log('wow');
})