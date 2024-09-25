const saudacao = (nome) => alert(`Olá ${nome}`);

const processamento = (callback) => {
    const nome = prompt("Digite seu nome: ");
    callback(nome);
}
processamento(saudacao);

