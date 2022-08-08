const fs = require('fs');

// //File printing
// fs.writeFile('employees.json', '[{"name": "Employee 1 Name", "salary":2000}]', 'utf-8', (err) => {
//     if(err) console.log(err);
//     console.log('Dosya oluşturuldu.');
// })

// //File reading
// fs.readFile('employees.json', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log('Dosya okundu.');
// })

//Data update
const fileName = './employees.json';
const file = require(fileName);
file.push({"name": "Employee 2 Name", "salary": 3000} )
fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
});

// //File deleting
// fs.unlink('employees.json', (err) => {
//     if(err) console.log(err);
//     console.log('Dosya silindi.');
// })
