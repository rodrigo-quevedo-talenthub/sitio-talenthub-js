Hooks globales.


# Hook
Un hook junta toda la logica de "states" de un componente. Es una forma de quitar esa logica del componente, para que el componente solamente tenga codigo relacionado a retornar JSX (osea renderizar el JSX).

## Nombre del hook
Se le pone 'use' antes de la funcion que cumple, por ej: useBuscarCandidatos.js. Ese hook haria 3 cosas: 1) llamar a la api (usando una funcion de la carpeta /src/api) y traer los candidatos. 2) crear un state "candidatos" y asignarle el array de candidatos. 3) retornar ese state "candidatos"