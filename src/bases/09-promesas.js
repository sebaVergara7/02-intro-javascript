import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('2 segundos después');

//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         // resolve( heroe );
//         reject( 'No se pudo encontrar el héroe' );
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Héroe', heroe);
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {    
            const heroe = getHeroeById(id);
            if (heroe) resolve( heroe );
            else reject( 'No se pudo encontrar el héroe' );
        }, 2000);
    });

    return promesa;
}

getHeroeByIdAsync(4)
.then( console.log )
.catch( ( err ) => console.warn( err ));


getHeroeByIdAsync(10)
.then( ( heroe ) => console.log('Héroe', heroe))
.catch( ( err ) => console.warn( err ));


getHeroeByIdAsync(10)
.then( ( heroe ) => console.log('Héroe', heroe))
.catch( console.warn );