const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async() => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        /*switch (opt) {
            case 1:
                break;
            case 2:
                break;
            case 0:
                break;

        }*/

        await pausa();

    } while (opt !== 0);
};

main();