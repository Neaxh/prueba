/*leer y escribir en un archivo utilizando el modulo fs*/

import fs from 'fs';

constdata= ' Ejemplo de texto.\n';

fs.writeFile('ejemplo.txt' , data , (err)=> {
    if (err) throw err;
    console.log('el archivo fue guardado.');

    //leer el archivo recien creado

    fs.readFile('ejemplo.txt', 'utf8', (err, content)=> {
        if (err) throw err;
        console.log('Contenido del archivo;');
        console.log(content);
    });
});
