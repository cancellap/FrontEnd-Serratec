const pessoas = [
    { nome: "pedro", idade: 20, cidade: "petropolis" },
    { nome: "joao", idade: 50, cidade: "sao paulo" },
    { nome: "ana", idade: 17, cidade: "Petropolis" },
    { nome: "cleber", idade: 40, cidade: "magé" },
]
//aplico um filto que pega as pessoas que sao de "petropolis" e sao maior de 18 anos
//e faco um map pegando somente o nome desses.
const filtro = pessoas.filter((p) => p.cidade === "petropolis" && p.idade >= 18).map((p) => p.nome);
// console.log(filtro);

// pega o primeiro a ser encontrado
const busca = pessoas.find((p) => p.cidade.toString() === "petropolis".toLowerCase());
// console.log(busca);

const buscaLetra = pessoas.filter((pessoa) => pessoa.nome.toLowerCase().includes("a"));
console.log(buscaLetra);
