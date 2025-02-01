function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Chama a função correspondente ao tipo de ingresso
    if (tipo === 'pista') {
        comprarPista(qtd);
    } else if (tipo === 'superior') {
        comprarSuperior(qtd);
    } else if (tipo === 'inferior') {
        comprarInferior(qtd);
    } else {
        alert('Tipo de ingresso inválido.');
    }
}

function comprarPista(qtd) {
    let qtdPistaElement = document.getElementById('qtd-pista');
    let qtdPista = parseInt(qtdPistaElement.textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponível para o tipo pista.');
    } else {
        qtdPistaElement.textContent = qtdPista - qtd;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperiorElement = document.getElementById('qtd-superior');
    let qtdSuperior = parseInt(qtdSuperiorElement.textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo superior.');
    } else {
        qtdSuperiorElement.textContent = qtdSuperior - qtd;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferiorElement = document.getElementById('qtd-inferior');
    let qtdInferior = parseInt(qtdInferiorElement.textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo inferior.');
    } else {
        qtdInferiorElement.textContent = qtdInferior - qtd;
        alert('Compra realizada com sucesso!');
    }
}

