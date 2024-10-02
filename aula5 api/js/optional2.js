const pessoa = {
    nome: "pedro",
    sobrenome: "Cancella",
    idade: 20,
    endereco: {
        rua: "Rua Fulano de tal",
        numero: 628,
        bairro: "Taldo"
    },
    // exibirPessoa() {
    //     return 'ok'
    // }
}
console.log(pessoa.exibirPessoa?.() ?? "funcao nao existente");
console.log("nome" in pessoa);
console.log(Object.keys(pessoa));
console.log(Object.entries(pessoa));


