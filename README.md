
# Aplicación de prueba práctica
## Ejecución

Si se desea probar el proyecto, subo a un servidor:

https://demo-reactjs.angelpatricio.mx/
  

## Requisitos Funcionales


[✔️] - El header de la aplicación debe ser e-Commerce Gapsi y deberá usar el logo de la página web de Gapsi.\
`Colocado desde la pantalla de bienvenida y como Componente para ser reutilizado`

[✔️] - Se deberá tener una pantalla de bienvenida que muestre los siguientes elementos:\

- Imagen del candidato. (usar cualquiera)\
`Se utiliza un icono`

- Texto “Bienvenido Candidato 01” (devuelto por el servicio rest)\
`Se consume desde un dispatch`

- Texto con la versión de la aplicación. (devuelto por el servicio rest)\
`Se consume desde un dispatch`

[✔️] - Se requiere listar los productos de la tienda (devuelto por el servicio rest)\
`Se consume desde un dispatch`

[✔️] - A medida que se hace scroll se van cargando las páginas correspondientes (usar paginador del servicio rest)\
`En cuanto se hace scroll, se carga las dos páginas, (El servicio solo tiene dos páginas)`

[✔️] - Deseable: Se requiere agregar productos al carrito arrastrándolos al mismo.\
`Se deja un recuadro gris para arrastrar los artículos`

[✔️] - Deseable: Cuando un producto ya está en el carrito entonces no deberá aparecer en la lista.\
`Se remueve el artículo de la lista original cuando se pasa al carrito`

[✔️] - Deseable: En la parte superior derecha deberá aparecer un botón para reiniciar la aplicación e iniciar nuevamente.\
`Se deja un botón en la posición solicitada con MaterialUI`

## Requisitos no funcionales

[✔️] - La lista de productos deberá cargarse con virtual scroll.\
`Se establece un virtual scroll`

[✔️] - Deberá implementar al menos 2 patrones de diseño. En el código se debe indicar cual(es) archivos representan dichos patrones.\
`Se utilizan los siguientes patrones: Dispatch, Actions, Sagas, Reducers, Estados, Observadores, Proxy, Singleton`

[✔️] - Consumir los servicios web en la siguiente ruta: https://5413ec42-f060-403e-b676-dd7d7b0a0631.mock.pstmn.io\
`Se consumen los servicios proporcionados`\
![Texto alternativo](https://angelpatricio.mx/images/6.png)

[✔️] - Generar build con minificado y ofuscado de la aplicación.\
`Se deja el build en el release de este repositorio: https://github.com/angel-patricio/prueba_reactjs/releases/tag/v1.0.0`

[✔️] - Deseable: Los productos deberán cargarse en el carrito utilizando drag & drop.\
`Se deja un botón en la posición solicitada con MaterialUI`

[✔️] - Deseable: La solución deberá implementar al menos 1 feature de una PWA.\
`Se habilita para la instalación y la pantalla offline (PWA)`\
![Texto alternativo](https://angelpatricio.mx/images/5.png)

[✔️] - Deseable: Utilizar Material-UI\
`Se utiliza Material UI`

[] - Deseable: Implementar GraphQL\
`Se utilizó redux`

[✔️] - Deseable: Usar font-awesome o similar desde el CDN.\
`Se utilizó Roboto de Material UI`

[✔️] - Deseable: Usar bootstrap o similar desde el CDN.\
`Se utiliza Material UI`

## Puntos que serán evaluados
[] - Uso de las herramientas indicada en la sección Pre-requisitos.\
![Texto alternativo](https://angelpatricio.mx/images/4.png)

[] - Completitud de los requisitos funcionales.

[] - Inicio y fin del examen en los tiempos planificados

[] - Breve instructivo en el readme.md del proyecto que permita bajar el fuente y echar a andar el proyecto.

[] - Creatividad que se aplique a nivel visual como efectos, animaciones, transiciones, proporciones.

[] - Simplicidad en la lógica de programación.\
![Texto alternativo](https://angelpatricio.mx/images/2.png)

[] - Buenas prácticas de programación tales como: comentarios en código, uso de archivos de configuración por separado.\
`Todos los componentes fueron desarrollados en una estructura limpia y se dejó comentado el código`\
![Texto alternativo](https://angelpatricio.mx/images/3.png)


[] - El código debe ser compartido en cualquier SaaS Git como Github, Bitbucked de forma pública.

## Ejecución

Si se desea probar el proyecto, subo a un servidor:

https://demo-reactjs.angelpatricio.mx/

Para bajar el código se puede dar click arriba en "Descargar zip", esto descargará el código completo y se deben que correr los siguientes comandos dentro de la carpeta bajada:

### `npm start`

Instala todas las dependencias necesarias para correr el proyecto

### `npm start`

Corre la aplicación en modo desarrollo\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador
