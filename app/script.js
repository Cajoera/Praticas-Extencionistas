document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que o formulário seja submetido

    // Obtem os valores de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Lista de usuários válidos
    var validUsers = [
        { username: 'julio', password: '123' },
        { username: 'pedro', password: '123' },
        // Adicione mais usuários conforme necessário
    ];

    // Verifica se o usuário e a senha correspondem a um par válido
    var isValidUser = validUsers.some(function (user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
        // Se correspondem, exibe uma mensagem de sucesso
        alert('Login bem-sucedido!');
        // Salva o nome do usuário no armazenamento local
        localStorage.setItem('loggedInUser', username);
        // Redireciona para a página principal
        window.location.href = 'index.html';
    } else {
        // Se não correspondem, exibe uma mensagem de erro
        alert('Usuário ou senha inválidos. Por favor, tente novamente.');
    }
});
function criarFormulario() {
    // Criar um novo elemento form
    var form = document.createElement("form");
    form.setAttribute("action", "cadastro.php");
    form.setAttribute("method", "post");

    // Criar um label e um input para o código
    var labelCodigo = document.createElement("label");
    labelCodigo.setAttribute("for", "codigo");
    labelCodigo.textContent = "Código:";
    form.appendChild(labelCodigo);

    var inputCodigo = document.createElement("input");
    inputCodigo.setAttribute("type", "text");
    inputCodigo.setAttribute("id", "codigo");
    inputCodigo.setAttribute("name", "codigo");
    inputCodigo.setAttribute("required", "true");
    form.appendChild(inputCodigo);

    form.appendChild(document.createElement("br"));


    // Criar um label e um input para o descrição do item
    var labelDescricao = document.createElement("label");
    labelDescricao.setAttribute("for", "descricao");
    labelDescricao.textContent = "Descrição:";
    form.appendChild(labelDescricao);

    var inputDescricao = document.createElement("input");
    inputDescricao.setAttribute("type", "text");
    inputDescricao.setAttribute("id", "descricao");
    inputDescricao.setAttribute("name", "descricao");
    inputDescricao.setAttribute("required", "true");
    form.appendChild(inputDescricao);

    form.appendChild(document.createElement("br"));

    // Criar um label e um input para a quantidade
    var labelQuantidade = document.createElement("label");
    labelQuantidade.setAttribute("for", "quantidade");
    labelQuantidade.textContent = "Quantidade:";
    form.appendChild(labelQuantidade);

    var inputQuantidade = document.createElement("input");
    inputQuantidade.setAttribute("type", "text");
    inputQuantidade.setAttribute("id", "quantidade");
    inputQuantidade.setAttribute("name", "quantidade");
    inputQuantidade.setAttribute("required", "true");
    form.appendChild(inputQuantidade);

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    // Criar um botão de submit
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Cadastrar");
    form.appendChild(submitButton);

    // Adicionar o formulário à página
    document.body.appendChild(form);
}


function criarTabela() {
    // Capturar os valores do formulário
    var codigo = document.getElementById("codigo").value;
    var quantidade = document.getElementById("quantidade").value;

    // Criar uma nova linha na tabela
    var table = document.getElementById("tabelaCadastro");
    var newRow = table.insertRow();

    // Inserir células com os valores do formulário na nova linha
    var cellCodigo = newRow.insertCell(0);
    var cellQuantidade = newRow.insertCell(1);
    cellCodigo.textContent = codigo;
    cellQuantidade.textContent = quantidade;
}