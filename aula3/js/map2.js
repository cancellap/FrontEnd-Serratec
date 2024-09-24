const nome = ["pedro", "anna", "laila"];

//nome.map((nome) => nome.substring(0, 1)).forEach((n) => console.log(n));

const alunos = [
    { matricula: "123343", nome: "pedro" },
    { matricula: "657564", nome: "anna" },
    { matricula: "950439", nome: "paulo" },
];

alunos.map((a) => a.nome).forEach((a) => console.log(a));
