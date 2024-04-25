document.getElementById('loginForm').addEventListener('submit', function(event) {
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
    var isValidUser = validUsers.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
        // Se correspondem, exibe uma mensagem de sucesso
        alert('Login bem-sucedido! Bem-vindo, ' + username + '!');
        // Salva o nome do usuário no armazenamento local
        localStorage.setItem('loggedInUser', username);
        // Redireciona para a página principal
        window.location.href = 'index.html';
    } else {
        // Se não correspondem, exibe uma mensagem de erro
        alert('Usuário ou senha inválidos. Por favor, tente novamente.');
    }
});
