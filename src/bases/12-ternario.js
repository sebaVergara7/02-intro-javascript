const activo = true;

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null;
const mensaje = activo && 'Activo';
const notMensaje = !activo && 'Activo';

console.log( mensaje );
console.log( notMensaje );