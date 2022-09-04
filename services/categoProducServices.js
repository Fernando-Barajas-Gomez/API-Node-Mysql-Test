//----- Importamos el archivo de conexion a la DB -----//
const conexion = require('../conexionDB');


/**Funcion para obtener cierto producto de cierta categoria de la DB */
const obtenerProducto = (producto, categoria) => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT product.*, category.name AS categoryName FROM product, category WHERE product.category = category.id AND product.name LIKE ? AND category.name LIKE ?;', ['%'+producto+'%','%'+categoria+'%'], (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos ciertos productos de cierta categoria
            }else{
                reject('Error al obtener el producto, error: '+error);
            }
        });
    }); 
}


//----- Exportamos los datos al controlador -----//
exports.obtenerProducto = obtenerProducto;