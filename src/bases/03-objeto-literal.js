const persona = {
    nombre    : 'Sebastián',
    apellido  : 'Vergara',
    edad      : 27,
    direccion : {
        ciudad: 'Quillota',
        zip   : 12412512,
        lat   : 12.4353,
        lng   : 57.2423,
    },
};


// console.log( persona );
// console.log({ persona });
// console.table( persona );


const persona2 = { ...persona };
persona2.nombre = 'Gonzalo';

console.log( persona );
console.log( persona2 );