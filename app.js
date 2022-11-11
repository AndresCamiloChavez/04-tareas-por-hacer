// const { mostrarMenu, pausa } = require("./helpers/mensajes.js");
const { guardarInformacion, leerDB } = require("./helpers/guardarArchivo.js");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas.js");
require("colors");
const main = async () => {
  let opcionSeleccionada = "";
  const tareas = new Tareas();
  const tareasDb = leerDB();

  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }
  do {
    try {
      opcionSeleccionada = await inquirerMenu();
      switch (opcionSeleccionada) {
        case "1": //crear opción
          const descripcion = await leerInput("Descripción: ");
          tareas.crearTarea(descripcion);
          break;
        case "2":
          tareas.listarTareas();
          break;
        case "3":
          tareas.listarPendientesCompletadas(true);
          break;
        case "4":
          tareas.listarPendientesCompletadas(false);
          break;

        default:
          break;
      }

      guardarInformacion(JSON.stringify(tareas.listadoArr));
      await pausa();
    } catch (error) {
      console.log("Ocurrió un erorr", error);
    }
  } while (opcionSeleccionada !== "0");
  // pausa();
};

main();
