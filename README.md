# Proyecto final: **CASA DANKO E-Commerce**
## _Leandro Danko_
## Curso **React JS** de **CODERHOUSE**
## _Comisión: 41590_

Bienvenidos a mi proyecto Casa Danko APP para el curso de React JS de CODERHOUSE!

Gracias por tomarte un minuto y leer el readme :)

En este trabajo se presentará un e-commerce orientado al rubro de instalaciones sanitarias.

El contenido de la página se encuentra basado en el sitio www.casadanko.com.ar; mi proyecto del curso
de Desarrollo Web.

## Funcionalidades

En este proyecto se exhiben distintos productos, los cuales se encuentran alojados de manera remota en Firebase.

En las diferentes pestañas se puede ver el listado completo de productos, así como también los productos clasificados por su categoría, y acceder a las redes sociales del Partner.

Se puede acceder cliqueando sobre cualquiera de los productos a su detalle. Desde allí se puede seleccionar una cantidad y añadir al carrito.

### Cart Container

El cart container se encuentra deshabilitado por defecto mediante rendering condicional.
Al añadir productos se activará, visualizándose el widget en el Navbar.

Al acceder se podrán ver los distintos productos agregados, y podrá:

- Eliminarse uno o varios productos
- Vaciar el carrito de una vez. Lo cual renderiza una pantalla distinta con un botón para ir al listado de productos
- Proceder a finalizar la compra, mediante el formulario que se visualiza en pantalla


## Video de muestra
![Gif Buyer Path](../casa-danko-app/src/assets/images/gif-buyer-path.gif)


## Aclaraciones del alcance

- No se utilizó Navlink para incluir clases dinámicas, puesto que esta funcionalidad ya estaba incorporada anteriormente mediante las clases de CSS heredadas del proyecto de origen.

- El Navbar (en desuso desde el punto de vista funcional) se conserva para el trabajo con Firebase, así como también los estilos alojados en su archivo de CSS.

- No se alojó contenido en las futuras páginas de contacto y nosotros, los componentes están creados a los efectos de probar la navegabilidad sin recarga del sitio.




## Lenguajes aplicados

El proyecto está basado en las siguientes tecnologías.

- [ReactJS] - Casa Danko E-Commerce está basado en React JS.
- [Google Firebase] - Utilizando los recursos de Firestore Database y Storage.
- [JavaScript] - Basado en redacción ES6
- [CSS3]
- [HTML5]


## Bibliotecas aplicadas

Con el objetivo de mejorar la usabilidad y navegabilidad del sitio, fueron aplicadas las siguientes bibliotecas:

| Bilbiloteca | README | Uso |
| ------ | ------ |------ |
| React Router | [https://v5.reactrouter.com/web/guides/quick-start][react-router] | Acceso y navegación a los distintos componentes | 
| React Bootstrap | [https://react-bootstrap.github.io/][React Bootstrap] | Layout de componentes |
| Sweet Alerts | [https://sweetalert2.github.io/][Swal] | Interacción con el usuario, modales |
| GitHub | [plugins/github/README.md][PlGh] | Sharing |


## Instalación

Para poder trabajar con el proyecto deberás contar con los siguientes componentes instalados en tu editor de código: 

### [ReactJS] 

Crea un proyecto en React JS aparte del presente descargable con el objetivo de instalar los componentes necesarios.
- Accede a tu editor de código
- Abre una nueva terminal y tipea lo siguiente
```sh
npx create-react-app my-app
cd my-app
npm start
```

***A continuación instala los siguientes componentes:***

### [React-Router] 

- Abre una nueva terminal y tipea lo siguiente
```sh
yarn add react-router-dom
```

### [React Bootstrap] 

- Abre una nueva terminal y tipea lo siguiente
```sh
npm install react-bootstrap bootstrap
```

### [Google Firebase] 

- Abre una nueva terminal y tipea lo siguiente
```sh
npm install firebase
```

### [Swal] 

- Abre una nueva terminal y tipea lo siguiente
```sh
npm install sweetalert2
```

## Ejecución en servidor de desarrollo

***IMPORTANTE: De no instalar los componentes anteriores, el sitio no se verá correctamente o fallará su renderización***

- Abre una nueva terminal y tipea lo siguiente
```sh
npm start
```



   [ReactJS]: <https://https://es.reactjs.org/>
   [JavaScript]: <https://https://www.w3schools.com/js/js_es6.asp>
   [HTML5]: <https://es.wikipedia.org/wiki/HTML5>
   [CSS3]: <https://developer.mozilla.org/es/docs/Web/CSS>
   [react-router]: <https://v5.reactrouter.com/web/guides/quick-start>
   [Swal]: <https://sweetalert2.github.io/>
   [Google Firebase]: <http://https://firebase.google.com/docs?authuser=0&hl=es>
   [React Bootstrap]: <https://react-bootstrap.github.>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>