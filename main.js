function calcularDesconto() {
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const divResultado = document.getElementById('resultado');

    if (isNaN(valorCompra) || valorCompra <= 0) {
        divResultado.innerHTML = "<p>Digite um valor válido!</p>";
        return;
    }

    let valorDesconto = 0;

    if (valorCompra > 500) {
        valorDesconto = valorCompra * 0.1;
    } else if (valorCompra > 100) {
        valorDesconto = valorCompra * 0.05;
    }

    const valorComDesconto = valorCompra - valorDesconto;

    divResultado.innerHTML = `
        <p>Valor da compra: R$ ${valorCompra.toFixed(2)}</p>
        <p>Valor do desconto: R$ ${valorDesconto.toFixed(2)}</p>
        <p><strong>Valor com desconto: R$ ${valorComDesconto.toFixed(2)}</strong></p>
    `;
}