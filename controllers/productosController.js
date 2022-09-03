//----- Importamos el servicio de productos-----//
const servicio = require('../services/productosServices')    

/**Exportamos todos los productos de la base de datos*/
const obtenerProductos = async (req,res) => {
    try {
        let productos = await servicio.obtenerProductos();
        return res.status(200).json({data: productos, message: "OK. Consulta completada exitosamente." }); //retornamos el estatus, los productos (datos), y un mensaje de que se cumplio correctamente
    } catch (error) {
        return res.status(500).json({message: "Error: "+error.message }); //retornamos el status, y el mensaje de error
    }
}

/**Exportamos cierto producto de la base de datos*/
const obtenerProducto = async (req,res) => {

    const { producto } = req.params; //obtenemos el nombre del producto de la peticion

    try {
        let productoResult = await servicio.obtenerProducto( producto ); //obtenemos el resultado de la consulta a la BD

        if(productoResult === []){ //si los datos vienen vacios, significa que el producto no se encontro
            return res.status(204).json({ message: "Producto no encontrado."})
        }
        else{
            return res.status(200).json({data: productoResult, message: "OK. Consulta completada exitosamente." }); //retornamos el estatus, el producto (datos), y un mensaje de que se cumplio correctamente
        }
    } catch (error) {
        return res.status(500).json({message: "Error: "+error.message }); //retornamos el status, y el mensaje de error
    }
}

//----- Exportamos los datos a la ruta -----//
exports.obtenerProductos = obtenerProductos;
exports.obtenerProducto = obtenerProducto;