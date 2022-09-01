//----- Importamos los modulos -----//
const express = require('express');
const cors = require('cors')

//----- Uso de los modulos -----//
const app = express();

//----- configuración del servidor -----// 
app.set('port', process.env.PORT || 3000); //si el entorno en donde esta montado tiene un puerto predeterminado, si no colocamos uno por defecto
app.set('json spaces', 2); //espaciado de los elementos dentro del json


//----- Middlewares -----//
app.use(cors()); //Que se puedan realizar peticiones desde otro dominio
app.use(express.json());
app.use(express.urlencoded({ extended: true })) //para leer desde formularios

//------ Rutas -----//
app.use(require('./routes/routes'))

//----- Servidor en modo escucha -----//
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});