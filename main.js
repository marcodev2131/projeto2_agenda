const form = document.getElementById('form-contato');
const contatos = [];
const spanAprovado = '<span class="resultado aprovado">Cadastrado com sucesso!</span>';
const spanReprovado = '<span class="resultado reprovado">Erro ao cadastrar.</span>';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarContato();
    atualizarTabela();
});

function adicionarContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    // Validar se o nome já existe nos contatos
    if (contatos.some(contato => contato.nome === inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi cadastrado.`);
    } else {
        // Adicionar o contato ao array de contatos
        const novoContato = {
            nome: inputNomeContato.value,
            telefone: inputTelefoneContato.value
        };

        contatos.push(novoContato);
    }

    // Limpar os campos do formulário
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.getElementById('tabela-contatos');
    corpoTabela.innerHTML = '';

    contatos.forEach(contato => {
        const novaLinha = corpoTabela.insertRow();
        const cellNome = novaLinha.insertCell(0);
        const cellTelefone = novaLinha.insertCell(1);

        cellNome.textContent = contato.nome;
        cellTelefone.textContent = contato.telefone;
    });
}