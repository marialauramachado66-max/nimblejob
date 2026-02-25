# React + Vite
Challenge de Postulación
Este proyecto corresponde a un challenge técnico para una postulación de empleo.
Estructura del proyecto
El proyecto contiene una carpeta llamada funciones, dentro de la cual se encuentran tres archivos principales. El archivo getCandidate conecta con la API de la empresa y obtiene los datos del candidato, recibiendo como parámetro el email que se envía desde App.jsx. El archivo getJob conecta con la API de la empresa y trae un listado de puestos disponibles. El archivo postPostulacion realiza un POST a la API con los datos requeridos al presionar el botón Submit. En el body se envían los datos obtenidos en getCandidate junto con una URL de GitHub que se ingresa en el input.
Componentes principales
El componente ListadoJobs renderiza cada uno de los puestos obtenidos mediante getJob. Además, incluye el input para ingresar la URL de GitHub y el botón Submit, que al hacer clic envía la postulación utilizando postPostulacion.
Flujo de la aplicación
El usuario ingresa su email en App.jsx. Se ejecuta getCandidate para obtener los datos del candidato. Luego se ejecuta getJob para mostrar los puestos disponibles en ListadoJobs. El usuario ingresa la URL de su repositorio de GitHub en el input. Finalmente, al presionar Submit se ejecuta postPostulacion, enviando los datos del candidato junto con la URL de GitHub a la API de la empresa.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
