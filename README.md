# Proyecto-Feria-de-Flores
## Tabla de Contenidos
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [Funcionalidad](#funcionality)
 
### Información General
*** Página Web creada para venta de flores y subproductos como arreglos, centros de mesa, ramos etc., los que han sido clasificados en diferentes categorias como: Ocasión, Enamorados, Nacimiento, Celebraciones y los Más Vendidos.
### Tecnologías
*** Nodes, Base de Datos.
### Instalaciones
*** npm install @types/node, npm install express, npm install hbs, npm install -g nodemon, npm install gd.
### Colaboradores
*** Agradecimientos a cada uno de mis compañeros porque de todos recibí algún tipo de aporte para mis conocimientos y continuamente me instaron a continuar.Especialmente a mis companeros Miguel Olave, Marcelo Campaña y Carlos González, quiénes dedicaron parte de su tiempo personal, además de paciencia y voluntad para mi aprendizaje. Del mismo modo, también un reconocimiento a nuestra profesora señora Susana Muñoz, quién tuvo mucha dedicación y buena disposición de entregar sus conocimientos para con todos nosotros.
### Funcionalidad
*** 1-Creación página en index.html, haciendo uso de lenguaje html, css , js, hbs. SE ha usado también para la construcción de está página bootstrap, figurando como contenedor principal Galería de Flores que es la que muestra los productos en venta.    
*** 2-Imágenes usadas guardadas en Carpeta Public.
*** 3-Se instalan @types/node, -g nodemon, express y hbs.
*** 4-Se crea Carpeta Views con un archivo index.hbs(para extraer y separar instalaciones) y una sub Carpeta Partials en donde se instalan los archivos separados individualmente de archivo principal index.hbs(footer, carrousel etc.)
*** 5-En Carpeta index.js se generan las constantes y app,para hacer las diferentes llamadas para los requerimientos como HBS, POSTGRES y GET para traer desde API los resultados de "ramos"(productos).
*** 6- Feria de Flores está ubicada en puerto 3000(nodemon index)
*** 7-Se crea BD(postgres-puerto 5432), donde se insertan Tabla Ramos y los valores correspondientes a cada uno de los 19 productos y aparece filtro de búsqueda ascendente, se inserta Tabla Categoría y sus valores para generar un inner join entre ambas.
*** 8-Se instala POSTMAN('API/v1/ramos'), para creación de API FERIA DE FLORES, se ingresan los datos de los ramos(productos) y se abre una nueva Carpeta instalando express, dg y pg para su funcionamiento.Se crea una Carpeta llamada src y una sub carpeta de nombre routes la que contiene 2 archivos: 
a- index.js que contiene las constantes y las app.
b- ramos.js que contiene las constantes que nos conectaran con la BD y router.get, router.post, router.put, router.delete, en puerto 4000(node src index.js)
