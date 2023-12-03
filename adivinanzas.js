
const generarNum = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificar = (nroSecreto, nroAdivinado) => {
    if (nroSecreto == nroAdivinado) {
        console.log("¡Perfecto, adivinaste!");
    } else if (nroSecreto < nroAdivinado) {
        console.log('El número secreto es menor');
    } else {
        console.log('El número secreto es mayor');
    }
};

module.exports = {
    generarNum,
    verificar
}       