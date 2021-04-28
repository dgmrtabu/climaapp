const { green } = require('colors');
const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [{
            value: 1,
            name: `${'1.'.green} Buscar ciudad`

        },
        {
            value: 2,
            name: `${'2.'.green} Historial`

        },
        {
            value: 0,
            name: `${'3.'.green} Salir`

        },
    ]
}];


const inquirerMenu = async() => {

    console.clear();

    console.log('=========================='.white);
    console.log('   Selecccion una opción'.white);
    console.log('==========================\n'.white);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async() => {
    const continuar = [{
        type: 'input',
        name: 'enter',
        message: `\n Presione ${'ENTER'.green} para continuar\n`,
    }];
    console.log('\n');
    await inquirer.prompt(continuar);
};

const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Introdusca una tarea';
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

const listadoTarreasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        };
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]

    const { id } = await inquirer.prompt(preguntas);
    return id;
};

const confirmarBorrado = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message,
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

const mostarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        };
    });

    const pregunta = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
};


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTarreasBorrar,
    confirmarBorrado,
    mostarListadoChecklist
}