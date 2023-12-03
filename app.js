const readlineSync = require('readline-sync');
const {generarNum, verificar} = require('./adivinanzas');

const nroUsuario = () => {
    return readlineSync.question('Ingresa un Número: ')
}
const juego = () => {
    const nroSecreto = generarNum();
    let nroAdivinado = 0;

    console.log('Bienvenido a nuestro juego!!');
    console.log('Intenta adivinar un número del 1 al 100 \n');

    while (nroAdivinado != nroSecreto){
        nroAdivinado = nroUsuario();
        verificar(nroSecreto, nroAdivinado);
    }
};
juego();