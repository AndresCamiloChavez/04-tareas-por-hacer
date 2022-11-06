const { mostrarMenu, pausa } = require("./helpers/mensajes.js");
const menu = require('./helpers/inquirer.js');
require("colors");
const main = async () => {
  let opcionSeleccionada = "";
  console.clear();
  do {
    try {
      opcionSeleccionada = await menu.inquirerMenu();

    } catch (error) {
      console.log("Ocurrió un erorr", error);
    }
  } while (opcionSeleccionada !== "0");
  // pausa();
};

main();
