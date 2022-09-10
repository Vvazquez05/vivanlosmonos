# Vivan los monos

Página de venta de funkos.

## Correr el proyecto

Se abre la terminal de preferencia "bash"
$ git clone https://github.com/Vvazquez05/vivanlosmonos.git
$ cd vivanlosmonos
$ npm install
$ npm start
Nota: utilizar el comando "ls" para visualizar la carpeta package,json, una ves visualizada utilizar el comando npm start.

### `npm start`

Corre la aplicación en modo desarrollo
Abre [http://localhost:3000](http://localhost:3000) to verlo en tu navegador.

Se necesita guardar cambios para que pueda actualizar la página

#### Rutas

Las rutas se vincularon con los detalles de los productos, en la url de localhost:3000/

-localhost:3000: Muestra la colección de todos los productos
-http://localhost:3000/category/Super%20h%C3%A9roes: Muestra la Colección de categoria Super héroes
-http://localhost:3000/category/Villanos: Muestra la Colección de Villanos
-http://localhost:3000/category/Musico: Muestra la Colección de Musicos
http://localhost:3000/category/Anime: Muestra la Colección de Personajes de ánime
http://localhost:3000/checkout: Orden de compra

-Una vez elegido el producto, dar click en "ver detalles" y podrá ver mása detalle la descripción del producto
-Elegir la cantidad deseada, podrá seguir comprando o ir a su carrito para conocer el importe de los productos.
-La opción de "pagar" en el carrito, lo direcciona a la orden de compra.
-http://localhost:3000/checkout es la orden de compra donde se deberá llenar un formulario para realizar la orden.
-Realizada la orden, se rediccionará al inicio de la página.
