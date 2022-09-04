//----- Importamos el servicio de filtar por producto y categoria-----//
const servicio = require('../services/categoProducServices')  

/**Función para obtener los productos de cierta categoria*/
const obtenerProducto = async (req, res) => {

    const {categoria} = req.params; //obtenemos la categoria de la peticion
    const {producto} = req.params; //obtenemos el nombre del producto de la peticion
   
    try {
        let productoResult = await servicio.obtenerProducto(producto, categoria); //obtenemos el resultado de la consulta a la BD

        if(productoResult === []){ //si los datos vienen vacios, significa que el producto no se encontro
            return res.status(204).json({ message: "producto no encontrado."})
        }
        else{
            return res.status(200).json({data: productoResult, message: "OK. Consulta completada exitosamente." }); //retornamos el estatus, los productos (datos), y un mensaje de que se cumplio correctamente
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error: '+error.message }); //retornamos el status, y el mensaje de error
    }
}

//----- Exportamos los datos a la ruta -----//
exports.obtenerProducto = obtenerProducto;