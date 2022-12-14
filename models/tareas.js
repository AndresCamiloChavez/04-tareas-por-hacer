const Tarea = require("./tarea");

class Tareas {
  _listado = {};
  constructor() {
    this._listado = {};
  }
  cargarTareasFromArray(tareas) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  listarTareas() {
    this.listadoArr.map((tarea, i) => {
      console.log(
        `       ${(i + 1 + ".").green} ${tarea.descripcion} :: ${
          tarea.completadoEn ? "Completado".green : "Pendiente".red
        }`
      );
    });
  }
  listarPendientesCompletadas(completadas = true) {
    this.listadoArr.forEach((tarea, i) => {
      if (completadas && tarea.completadoEn) {
        console.log(
          `       ${(i + 1 + ".").green} ${tarea.descripcion} :: ${
            "Completado".green
          }`
        );
      } else if(!completadas && tarea.completadoEn == null) {
        console.log(
          `       ${(i + 1 + ".").green} ${tarea.descripcion} :: ${"Pendiente".red}`
        );
      }
    });

    if (completadas) {
    }
  }

  borrarTarea(id = ''){
    if(this._listado[id]){
      delete this._listado[id];
    }
  }

  toogleCompletadas(ids = []){
    ids.forEach(id => {
      const tarea = this._listado[id];
      if(!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString();
      }
    });
    this.listadoArr.forEach( tarea => {
      if(!ids.includes(tarea.id)){
        const tareas = this._listado;
        tareas[tarea.id].completadoEn = null;
      }
    });

  }

  crearTarea(descripcion = "") {
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
