//----- Importamos los modulos -----//
const { Router } = require('express'); //la función a usar solamente para las rutas
const router = Router();

//----- Importamos los controladores -----//
const productos = require('../controllers/productosController');
const categorias = require('../controllers/categoriasController');

//----- Ruta inicial -----//
router.get('/', (req, res)  => {
    return res.status(200).json({message: "OK. Bienvenido a la api." });
});

//----- Ruta para obtener los productos -----//
router.get('/products', productos.obtenerProductos);

//----- Ruta para obtener cierto productos -----//
router.get('/product/:producto', productos.obtenerProducto);

//----- Ruta para obtener los productos de cierta categoria -----//
router.get('/category/:categoria', categorias.obtenerCategoria);

//----- Exportamos el modulo -----//
module.exports = router;