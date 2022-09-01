//----- Importamos el archivo de conexion a la DB -----//
const conexion = require('../conexionDB');

//----- Exportamos los datos al controlador -----//
exports.obtenerCategoria = (categoria) => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT product.*, category.name AS categoryName FROM product, category WHERE product.category = category.id AND category.name LIKE ?', ['%'+categoria+'%'], (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos los productos de cierta categoria
            }else{
                reject('Error al obtener la categoria');
            }
        });
    }); 
}
