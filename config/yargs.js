const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta cuantas veces quiero multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un unmero';
        }
        if(isNaN(argv.h)) {
            throw 'Hasta tiene que ser un unmero';
        }
        return true;
    })
    .argv;

    module.exports = argv;