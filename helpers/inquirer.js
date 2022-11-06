const inquirer = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      { value: "1", name: "1. Crear tarea" },
      { value: "2", name: "2. Listar tareas" },
      { value: "3", name: "3. Listar tareas completadas" },
      { value: "4", name: "4. Listar tareas pendientes" },
      { value: "5", name: "5. Completar tarea(s)" },
      { value: "6", name: "6. Borrar tarea" },
      { value: "0", name: "0. Salir" },
    ],
  },
];
const opcionPausa = [
  {
    type: 'input',
    name: "opcion",
    message: `Presione ${"ENTER".blue} para continuar \n`,
  },
];

const inquirerMenu = async () => {
//   console.clear();
  console.log("==================================".green);
  console.log("Seleccione una opción");
  console.log("==================================\n".green);

  const { opcion } = await inquirer.prompt(menuOptions);
  console.log("Ha seleccionado -> ".bgYellow , opcion);
  return opcion;
};

const pausa = async () => {
  let resp = await inquirer.prompt(opcionPausa);
  console.log('\n');
  return resp;
};

module.exports = {
  inquirerMenu,
  pausa,
};
