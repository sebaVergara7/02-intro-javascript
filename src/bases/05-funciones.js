// Funciones en JS

// function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }

// console.log( saludar('Goku') );

// saludar = 30;

// console.log( saludar );

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) =>  `Hola, ${ nombre }`;
const saludar4 = () =>  `Hola Mundo`;

// saludar = 20;


console.log( saludar );
console.log( saludar2 );
console.log( saludar3 );

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Gonzalo') );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC1234',
    username: 'PruebaSV',
})

console.log( getUser() );

const user = getUser();
console.log( user );


// Tarea
// 1. Transformar a una función de flecha
// 2. Retornar objeto implícito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid      : 'ABC567',
//         username : nombre,
//     };
// };


const getUsuarioActivo = (nombre) => ({
    uid      : 'ABC567',
    username : nombre,
});

const usuarioActivo = getUsuarioActivo('Sebastián');
console.log( usuarioActivo );