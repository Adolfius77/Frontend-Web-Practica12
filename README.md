¿En qué se convirtió cada etiqueta del JSX?

El JSX no se ejecuta tal cual. Antes de correr, el compilador lo convierte en llamadas de JavaScript que crean los elementos de React. En modo clásico, eso se ve como React.createElement(...). En modo automático, SWC usa jsx(...) o jsxs(...) desde react/jsx-runtime.

Si React es “sólo una biblioteca”, ¿quién traduce el JSX?

Lo traduce el compilador de la herramienta de construcción, en este caso SWC dentro de Vite. React no entiende JSX por sí solo; primero pasa por el compilador y ya después React trabaja con el JavaScript que salió de ahí.

¿Qué hace createRoot y qué hace render?

createRoot prepara el contenedor principal donde React va a trabajar, y render mete ahí el árbol de componentes. En este proyecto, main.tsx toma el div#root de index.html y ahí carga toda la aplicación.

¿Por qué el nombre de un componente empieza con mayúscula?

Porque React usa esa regla para diferenciar componentes de etiquetas HTML normales. Si empieza con minúscula, lo toma como una etiqueta del DOM; si empieza con mayúscula, entiende que es un componente hecho por nosotros.


