# API STOCKS BSALE
***
## Descripción
---
---
API a través de la cual se realizan peticiones de tipo GET para obtener productos del stock. Obtención de datos.

## Estructura JSON
---
---
- Respuesta sin errores:

        {
            "data" : [
                {
                    "id": 5,
                    "name": "ENERGETICA MR BIG",
                    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                    "price": 1490,
                    "discount": 20,
                    "category": 1,
                    "categoryName": "bebida energetica"
                }
            ]
            "message" : "OK. Consulta completada exitosamente."
        }


    * **data:** arreglo con los productos retornados


    * **message:** mensaje sobre si la consulta se ejecuto con éxito o si hubo algún error.

- Respuesta con error:

        {
            "message" : "mensaje con el error obtenido a través del try catch"
        }

### GET Todos los productos
---
---
- Enlace ejemplo:

    https://api-stocks-bsale.herokuapp.com/products

- Descripción: 

    Esta ruta devolverá una lista en formato JSON con todos los productos en el stock.

- Respuesta:

        {
            "data" : [
                {
                    "id": 5,
                    "name": "ENERGETICA MR BIG",
                    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                    "price": 1490,
                    "discount": 20,
                    "category": 1,
                    "categoryName": "bebida energetica"
                }
            ]
            "message" : "OK. Consulta completada exitosamente."
        }

### GET Todas las categorías
---
---
- Enlace ejemplo:

    https://api-stocks-bsale.herokuapp.com/categories

- Descripción: 

    Esta ruta devolverá una lista en formato JSON con todas las categorías en el stock.

- Resultado:

        {
            "data": [
                {
                "name": "bebida energetica"
                },
                {
                "name": "pisco"
                },
                {
                "name": "ron"
                },
                {
                "name": "bebida"
                },
                {
                "name": "snack"
                },
                {
                "name": "cerveza"
                },
                {
                "name": "vodka"
                }
            ],
            "message": "OK. Consulta completada exitosamente."
        }

### GET Producto específico
---
---
- Enlace ejemplo:

    https://api-stocks-bsale.herokuapp.com/product/:producto

- Parámetros:

    * **producto:** Nombre del producto a buscar.

- Descripción: 

    Esta ruta devolverá una lista en formato JSON con todos los productos que su nombre concuerde con el parametro **producto**.

- Resultado:

        {
            "data": [
                {
                "id": 47,
                "name": "Maní salado",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
                "price": 600,
                "discount": 0,
                "category": 5,
                "categoryName": "snack"
                },
                {
                "id": 53,
                "name": "Mani Sin Sal",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
                "price": 500,
                "discount": 0,
                "category": 5,
                "categoryName": "snack"
                }
            ],
            "message": "OK. Consulta completada exitosamente."
        }

### GET Producto de cierta categoría
---
---
- Enlace ejemplo:

    https://api-stocks-bsale.herokuapp.com/category/:categoria

- Parámetros:

    * **categoria:** Nombre de la categoría por la que se filtrarán los productos.

- Descripción: 

    Esta ruta devolverá una lista en formato JSON con todos los productos que pertenezcan a la categoría en el parámetro **categoria**.

- Resultado:

        {
            "data": [
                {
                "id": 47,
                "name": "Maní salado",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
                "price": 600,
                "discount": 0,
                "category": 5,
                "categoryName": "snack"
                },
                {
                "id": 53,
                "name": "Mani Sin Sal",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
                "price": 500,
                "discount": 0,
                "category": 5,
                "categoryName": "snack"
                },
                {
                "id": 54,
                "name": "Papas Fritas Lisas Bolsa Grande",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
                "price": 1490,
                "discount": 0,
                "category": 5,
                "categoryName": "snack"
                }
            ],
            "message": "OK. Consulta completada exitosamente."
        }

### GET Producto específico y categoría específica
---
---
- Enlace ejemplo:

    https://api-stocks-bsale.herokuapp.com/product/category/:producto/:categoria

- Parámetros:

    * **producto:** Nombre del producto a buscar

    * **categoria:** Nombre de la categoría por la que se filtrará.

- Descripción: 

    Esta ruta devolverá una lista en formato JSON con todos los productos que su nombre concuerde con el parámetro **producto** y que pertenezcan a la categoría en el parámetro **categoria**.

- Resultado:

        {
            "data": [
                {
                "id": 26,
                "name": "RON BARCELO AÑEJO",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
                "price": 4990,
                "discount": 0,
                "category": 3,
                "categoryName": "ron"
                },
                {
                "id": 27,
                "name": "RON BARCELO DORADO",
                "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barcelodorado9567.jpg",
                "price": 3990,
                "discount": 0,
                "category": 3,
                "categoryName": "ron"
                }
            ],
            "message": "OK. Consulta completada exitosamente."
        }