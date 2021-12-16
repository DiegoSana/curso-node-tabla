const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//const base = 2;
//const [,,arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(base);

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then(filename => console.log(filename, 'creado'))
    .catch(err => console.log(err));