//----- Importamos el servicio de productos-----//
const servicio = require('../services/productosServices')    

//----- Exportamos los datos a la ruta -----//
exports.obtenerProductos = async function (req, res) {
    try {
        let productos = await servicio.obtenerProductos();
        return res.status(200).json({ status: 200, data: productos, message: "OK. Consulta completada exitosamente." }); //retornamos el estatus, los productos (datos), y un mensaje de que se cumplio correctamente
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Error: "+error.message }); //retornamos el status, y el mensaje de error
    }
}