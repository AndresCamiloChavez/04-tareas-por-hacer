const fs = require("fs");
const archivo = "./database/data.json";
const guardarInformacion = (data) => {
  fs.writeFileSync(archivo, data);
};

const leerDB = () => {
    if(!fs.existsSync(archivo)) return null;

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    // console.log('info',info);
    return JSON.parse(info);
};

module.exports = {
  guardarInformacion,
  leerDB
};
