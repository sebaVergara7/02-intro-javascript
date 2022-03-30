// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre : 'Tony',
    edad   : 45,
    clave  : 'Ironman',
    // rango  : 'Soldado',
};

const { nombre, edad, clave } = persona;

// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const pruebaUseContext = ({ clave, nombre , edad, rango = 'Capitán' }) => {
    // console.log( nombre, edad, rango );
    return {
        nombre      : nombre,
        rango       : rango,
        nombreClave : clave,
        anios       : edad,
        latlng: {
            lat: 23.123,
            lng: 25.535,
        }
    }
}

const avenger = pruebaUseContext(persona);
console.log( avenger );

// const { nombreClave, anios } = avenger;
const { nombreClave, anios, latlng: { lat, lng } } = pruebaUseContext(persona);


console.log( nombreClave, anios );
console.log( lat, lng );