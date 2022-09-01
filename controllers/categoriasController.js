//----- Importamos el servicio de las categorias-----//
const servicio = require('../services/categoriasServices')    

//----- Exportamos los datos a la ruta -----//
exports.obtenerCategoria = async function (req, res) {

    const {categoria} = req.params; //obtenemos la categoria de la peticion
   
    try {
        let categoriaResult = await servicio.obtenerCategoria(categoria); //obtenemos el resultado de la consulta a la BD

        if(categoriaResult === []){ //si los datos vienen vacios, significa que 
            return res.status(204).json({ message: "Categoría no encontrada."})
        }
        else{
            return res.status(200).json({data: categoriaResult, message: "OK. Consulta completada exitosamente." }); //retornamos el estatus, los productos (datos), y un mensaje de que se cumplio correctamente
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error: '+error.message }); //retornamos el status, y el mensaje de error
    }
}