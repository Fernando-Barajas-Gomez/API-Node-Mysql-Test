//----- Importamos los modulos -----//
const { Router } = require('express'); //la función a usar solamente para las rutas
const router = Router();

//----- Importamos los controladores -----//
const productos = require('../controllers/productosController');
const categorias = require('../controllers/categoriasController');

//----- Ruta inicial -----//
router.get('/', productos.obtenerProductos);

//----- Ruta para obtener los productos de cierta categoria -----//
router.get('/category/:categoria', categorias.obtenerCategoria);

//----- Exportamos el modulo -----//
module.exports = router;