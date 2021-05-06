require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const terminodebusqueda = await leerInput('Ciudad a buscar:');
                const lugares = await busquedas.ciudad(terminodebusqueda); // Buscar los lugares
                const id = await listarLugares(lugares);
                if (id === '0') continue;

                const lugarSel = lugares.find(l => l.id === id); // Seleccionar el lugar
                // Guardar en DB
                busquedas.agregarHistorial(lugarSel.nombre);
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lnt); // Clima

                // Mostar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.clear();
                console.log('Ciudad:', lugarSel.nombre.green);
                console.log('Latitud:', lugarSel.lnt);
                console.log('Longitud:', lugarSel.lat);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${ idx } ${ lugar }`);
                });

                break;
            case 0:
                break;

        }

        if (opt !== 0) await pausa();

    }
    while (opt !== 0);
};

main();