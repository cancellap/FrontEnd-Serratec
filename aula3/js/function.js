function mensgem() {
    console.log("Aula de JS");
}

function soma(n1, n2) {
    return n1 + n2;
}
//console.log(`Resultado: ${soma(20, 40)}`);

//funcao anonima
let mensagem = function () {
    return console.log("Isso é uma funcao anonima");
}
//mensagem();

//Function Expression ou Arrow Function
let msg = () => console.log("isso é uma arrow function")
msg();
let resultado = (n1, n2) => n1 + n2;
console.log(`Resultado: ${resultado(10, 4)}`);
