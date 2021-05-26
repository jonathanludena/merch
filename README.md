# Creacion de proyecto desde 0 sin CRA

## Paso a paso

1. Iniciar Git: git init
2. Iniciar NPM: npm init -y
3. Instalar React: npm install react react-dom
4. Estructura del proyecto
   - En la raiz crear carpeta src, public
   - Dentro de /public crear archivo index.html
   - Dentro de /src crear archivo index.js y la carpeta components
   - Dentro de la carpeta components, crear el archivo App.jsx
5. Instalar Webpack como dependencia de desarrollo: npm install webpack webpack-cli webpack-dev-server -D
6. Instalar plugin y loader de html: npm install html-webpack-plugin html-loader -D
7. Instalar Babel: npm install babel-loader @babel/preset-env @babel/preset-react @babel/core -D
8. Crear archivo webpack.config.js
   - Requerimos path y html-webpack-plugin
   - Exportamos la configuracion de webpack (ver configuracion en archivo webpack.config.js)
9. Configuramos Scripts en package.json:
   "start" y "build":
   - "start": "webpack serve" inicia el servidor de desarrollo
   - "build": "webpack --mode production" genera los archivos dist para produccion
10. Para que webpack pueda compilar tambien estilos en el proyecto debemos instalar: css-loader y mini-css-extract-plugin como dependencia de desarrollo
11. Agregamos la configuracion en el archivo de webpack
    - en las reglas y en plugins se agregan las configuraciones
12. Flujo de desarrollo seguro y consistente en ESLint, prettier y husky:
    - Instalamos de forma global eslint: npm install -g eslint
    - Instalamos dentro del proyecto eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
    - creamos el archivo .eslintrc con la configuracion de eslint para el proyecto
    - Instalamos prettier eslint-plugin-prettier eslint-config-prettier
    - creamos el archivo .prettierrc
    - Creamos Scripts "format" y "lint"
13. Instalamos Husky. Husky es una herramienta que nos permite ejecutar Git Hooks de forma más amigable y sencilla con los cuales vamos a garantizar que se corren las pruebas pertinentes en nuestro código y de esta forma no enviar un bug o inconsistencias al repositorio del proyecto. Una vez agregada la configuración podemos estar seguros de que antes de agregar cada commit se ejecutarán estos hooks, los cuales validarán las pruebas necesarias que agreguemos a nuestro proyecto tenga un resultado positivo. Si existe un error o las pruebas que incorporamos el proyecto no funcionan, en la consola podremos ver el resultado mostrando el error por el cual no se puede enviar el commit a nuestro repositorio.
14. Arquitectura de vistas y componentes con React Router DOM
   - Creamos la carpeta Containers donde estaran las vistas de la app
   - Creamos la carpeta routes donde estaran las rutas de la app. 
   - Instalamos react-router-dom
   - Creamos el App.jsx en la carpeta routes 
   - Creamos los componentes de la app en containers
   - Configuramos publicPatch en output y hitoryApiFallback: true en webpack.config.js para que webpack pueda compilar las rutas de react-router-dom
   