const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes [0] );
// console.log( personajes [1] );
// console.log( personajes [2] );

const [ p1 ] = personajes;

console.log( p1 );

const [ , p2 ] = personajes;

console.log( p2 );

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
};

const arr = retornaArreglo();
console.log(arr);

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

const pruebaUseState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }];
}

const arr2 = pruebaUseState( 'Goku' );
console.log( arr2 );

// Tarea
// 1. El primer valor del arr2 se llamará nombre
// 2. El segundo valor del arr2 se llamará setNombre

const [ nombre, setNombre ] = pruebaUseState( 'Goku' );

console.log( nombre );
setNombre();
