const produto = undefined;
// if (produto) {
//     console.log("diferente de undefined, null ou vazio");
// } else {
//     console.log("produto é undefined");
// }

// console.log(produto?.descricao ?? "O atributo descricao nao existe");

// const produto2 = {
//     descricao: "celular",
//     valor: 2000,
// }
// produto2.valor = null;
// console.log(produto2?.valor ?? "Valor vazio");

const idade = null;

//null Coalescing Operator

console.log(`Sua idade é ${idade || "'idade nao informada'"}`);
