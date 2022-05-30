# miEcommerce-equipo4-React

Sobre el proyecto

Proyecto de aplicación ecommerce cuya finalidad es la compra-venta de productos.
En este Sprint 4, la funcionalidad se focaliza en el Listado, Alta, Baja y Modificación de Productos (CRUD) en React.

Consta de las siguientes vistas:

- Página de inicio
- Página de listado de productos
- Página del detalle del producto
- Página para editar producto
- Página para agregar producto

Herramienta utilizada para la organización y el workflow:
- Trello

https://trello.com/b/uHOrDC2c/miecommerce

Tecnologías 

- React.js

Dependencias

"axios": "^0.27.2"
"json-server": "^0.17.0"
"prop-types": "^15.8.1"
"react": "^18.1.0"
"react-dom": "^18.1.0"
"react-router-dom": "^6.3.0"

Se tomó como modelo de api:
https://fakestoreapi.com/products

Instalación del proyecto

- Clonar el repositorio
git clone https://github.com/FranRSantander/miEcommerce-equipo4-React.git

- Instalar los paquetes npm
npm install

- Correr el JSON json server y el proyecto
npx json-server --watch db.json --port 3002
npm start

Iteraciones del proyecto

El proyecto está basado en una serie de Sprints previos (ver repositorio: https://github.com/FranRSantander/miEcommerce-equipo4.git)

Sprint I:
Maquetación y estilos con html y css.

Sprint II: 
Agregado de funcionalidades con Express y patrón MVC. División en carpetas: view - model - controller. Validaciones por parte del backend.
Llamadas a Api por get para la visualización de productos.

Sprint III:
Aplicación de Mobile Design. Manipulación del DOM y agregado de eventos. Validaciones en el Frontend. Agregado de Menú Principal.

Sprint IV (sprint actual):
Desarrollo de maquetado de interfaz en React. Aplicar Ruteo mediante react-router-dom. Desarrollo de componentes. Mobile first. Uso de hooks para manipulación del estado de componentes. Llamado a la api para realizar operaciones CRUD.

Integrantes del grupo:

- Rechou, Franco
- Serradell, Pablo
- Perez Martínez, Damián
- Kuba, Carolina
