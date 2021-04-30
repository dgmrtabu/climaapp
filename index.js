require('dotenv').config();
const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {


    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad a buscar:');
                await busquedas.ciudad(lugar);
                // Buscar los lugares
                // Seleccionar el lugar
                // Clima
                // Mostar resultados
                console.log('\nInformacion de la ciudad\n');
                console.log('Ciudad:');
                console.log('Latitud:');
                console.log('Longitud:');
                console.log('Temperatura:');
                console.log('Minima:');
                console.log('Maxima:');
                break;
            case 2:
                break;
            case 0:
                break;

        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);
};

main();