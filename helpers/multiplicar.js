const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, hasta = 10, listar) => {

    try {    
        let salida = '';
    
        for (let i=1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        
        if(listar) {
            console.log('=====================');
            console.log(`Tabla del ${base}`);
            console.log('=====================');
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`.rainbow;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}