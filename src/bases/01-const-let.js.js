// Variables y Constantes

const nombre = 'Sebastián';
const apellido = 'Vergara';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado );

// 'var' No se debe de usar...

if ( true ) {
    let valorDado = 6;
    const nombre = 'Gonzalo';
    console.log( nombre, valorDado );
}

console.log( valorDado );