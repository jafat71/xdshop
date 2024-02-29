import fs from "fs"

const filePath = './build/index.html';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    const newData = data.replace(/\/assets\/[\w-]+\.(\w+)/g, '.$&');

    fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Rutas corregidas correctamente.');
    });
});
