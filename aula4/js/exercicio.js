// array com números
// e procurar o primeiro numero múltiplo de 2

const numeros = [13, 3, 4, 5, 46, 8, 56, 8];

const numerosFind = numeros.find((n) => n % 2 === 0);
console.log(numerosFind);
