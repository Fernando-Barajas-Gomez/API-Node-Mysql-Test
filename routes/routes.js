//----- Importamos los modulos -----//
const { Router } = require('express'); //la función a usar solamente para las rutas
const router = Router();

//----- Importamos los controladores -----//
const productos = require('../controllers/productosController');
const categorias = require('../controllers/categoriasController');
const categoProduc = require('../controllers/categoProducController')

//----- Ruta inicial -----//
router.get('/', (req, res)  => {
    return res.status(200).json({message: "OK. Bienvenido a la api." });
});

//----- Ruta para obtener todos los productos -----//
router.get('/products', productos.obtenerProductos);

//----- Ruta para obtener cierto producto -----//
router.get('/product/:producto', productos.obtenerProducto);

//----- Ruta para obtener los nombres de todas las categorias -----//
router.get('/categories', categorias.obtenerCategorias);

//----- Ruta para obtener los productos de cierta categoria -----//
router.get('/category/:categoria', categorias.obtenerCategoria);

//----- Ruta para obtener cierto producto de cierta categoria -----//
router.get('/product/category/:producto/:categoria', categoProduc.obtenerProducto);


//----- Exportamos el modulo -----//
module.exports = router;