//----- Importamos los modulos -----//
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

//----- Parametros para crear la conexion (Se obtienen de las variables de entorno)-----//
const conexion = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

//----- Exportamos el modulo -----//
module.exports = conexion;
