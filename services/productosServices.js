//----- Importamos el archivo de conexion a la DB -----//
const conexion = require('../conexionDB');

/**Función para obtener todos los productos de la base de datos */
const obtenerProductos = () => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT product.*, category.name AS categoryName FROM product, category WHERE product.category=category.id;', (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos los productos
            }else{
                reject('Error al obtener los productos');
            }
        });
    }); 
}

/**Función para obtener cierto producto de la base de datos */
const obtenerProducto = (producto) => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT product.*, category.name AS categoryName FROM product, category WHERE product.category=category.id AND product.name LIKE?', ['%'+producto+'%'], (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos los productos
            }else{
                reject('Error al obtener los productos');
            }
        });
    }); 
}
//----- Exportamos las funciones al controlador -----//
exports.obtenerProductos = obtenerProductos;
exports.obtenerProducto = obtenerProducto;