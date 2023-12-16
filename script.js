const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="imagem de emogi feliz">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emogi triste" />';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado Aprovado"> Aprovado</span>`;
const spanReprovado = `<span class="resultado Reprovado"> Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite a nota minima:"));
let linhas = '';
// Adicionar a linha na tabela
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Pegando os valores dos inputs do formulário

    adicionarLinha();
    atualizandoTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Essa atividade ${inputNomeAtividade.value} já foi cadastrada!`)
    } else {   
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`
    linhas += linha
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }

    function atualizandoTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }
    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();

        document.getElementById('media-notas-final').innerHTML = mediaFinal.toFixed(2);
        document.getElementById('resultado-final').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
        console.log(media);
    }
    function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
    }