const pedidos = [
    { numero: 123, status: "enviado", total: 140 },
    { numero: 423, status: "preparando", total: 90 },
    { numero: 565, status: "enviado", total: 50 },
]
let totalPedidos = pedidos.reduce((soma, p) => soma + p.total, 0);
console.log(`Total: ${totalPedidos}`);

