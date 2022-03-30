// import { heroes } from './data/heroes';

// Con 'imp'
// import second from 'first'
// import { heroes } from '../data/heroes';

// import { heroes } from '../data/heroes';
// import heroes from '../data/heroes-2';

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';
// import { heroes, owners } from '../data/heroes';


// console.log( heroes );
// console.log( owners );

// const getHeroeById = ( id ) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id ){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

const getHeroeById = ( id ) => heroes.find( ( heroe ) => heroe.id === id);

// console.log( getHeroeById(1) );
// console.log( getHeroeById(2) );
// console.log( getHeroeById(3) );
// console.log( getHeroeById(4) );
// console.log( getHeroeById(5) );

const getHeroeByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

// console.log( getHeroeByOwner('DC') );
// console.log( getHeroeByOwner('Marvel') );

export {
    getHeroeById,
    getHeroeByOwner,
}
