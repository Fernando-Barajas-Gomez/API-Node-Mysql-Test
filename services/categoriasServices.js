//----- Importamos el archivo de conexion a la DB -----//
const conexion = require('../conexionDB');


/**Funcion para obtener los productos de cierta categoria de la DB */
const obtenerCategoria = (categoria) => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT product.*, category.name AS categoryName FROM product, category WHERE product.category = category.id AND category.name LIKE ?', ['%'+categoria+'%'], (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos los productos de cierta categoria
            }else{
                reject('Error al obtener la categoria, error: '+error);
            }
        });
    }); 
}

/**Funcion para obtener los nombres de todas las categorias de la DB */
const obtenerCategorias = () => {
    //retornamos los datos a traves de una promesa
    return new Promise ((resolve, reject) => {
        //generamos la consulta
        conexion.query('SELECT name FROM category;', (error, filas, campos) => {
            if(!error){ //si la consulta no tuvo errores
                resolve(filas); //retornamos los productos de cierta categoria
            }else{
                reject('Error al obtener las categorias, error: '+error);
            }
        });
    }); 
}

//----- Exportamos los datos al controlador -----//
exports.obtenerCategoria = obtenerCategoria;
exports.obtenerCategorias = obtenerCategorias;
