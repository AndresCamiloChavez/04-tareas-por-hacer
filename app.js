// const { mostrarMenu, pausa } = require("./helpers/mensajes.js");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas.js");
require("colors");
const main = async () => {
  let opcionSeleccionada = "";
  const tareas = new Tareas();
  do {
    try {
      opcionSeleccionada = await inquirerMenu();
      switch (opcionSeleccionada) {
        case '1': //crear opción
          const descripcion = await leerInput('Descripción: ');
          tareas.crearTarea(descripcion);
          break;
        case '2':
          console.log('Lista de tareas');
          console.log(tareas._listado);
          break;
        case '3':
          break;
        case '4':
          break;
      
        default:
          break;
      }
      await pausa();
    } catch (error) {
      console.log("Ocurrió un erorr", error);
    }
  } while (opcionSeleccionada !== "0");
  // pausa();
};

main();
