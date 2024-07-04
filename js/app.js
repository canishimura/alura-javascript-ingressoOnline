function comprar () {
    let setorSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidadeSelecionada = parseInt(document.getElementById('qtd').value);

    if(setorSelecionado == 'inferior') {
        comprarInferior(quantidadeSelecionada);
    } 
    
    if (setorSelecionado == 'superior') {
       comprarSuperior(quantidadeSelecionada);
    }
    
    if (setorSelecionado == 'pista') {
        comprarPista(quantidadeSelecionada);
    }
}

function comprarPista(quantidadeSelecionada) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').innerText);
    if (quantidadeSelecionada > quantidadePista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        quantidadePista -= quantidadeSelecionada;
        document.getElementById('qtd-pista').innerText = quantidadePista;
    }
}

function comprarInferior(quantidadeSelecionada) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').innerText);
    if (quantidadeSelecionada > quantidadeInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        quantidadeInferior -= quantidadeSelecionada;
        document.getElementById('qtd-inferior').innerText = quantidadeInferior;
    }
}

function comprarSuperior(quantidadeSelecionada) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').innerText);
    if (quantidadeSelecionada > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        quantidadeSuperior -= quantidadeSelecionada;
        document.getElementById('qtd-superior').innerText = quantidadeSuperior;
    }
}