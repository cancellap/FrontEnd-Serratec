const numeros = [10, 30, 40, 50];
let novoNumeros = [];

// for (let i = 0; i < numeros.length; i++) {
//     novoNumeros.push(numeros[i] * 2);
// }
// console.log(novoNumeros);

let novoMap = numeros.map((numeros) => numeros * 2);

novoMap.forEach((n) => console.log(n));
console.log("-------");
numeros.forEach((n) => console.log(n));
