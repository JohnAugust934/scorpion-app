//Entrar no cadastro
function entrar() {
    var mysql = require('mysql')
    //CONECÃO COM O BANCO
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: null,
        database: 'mydb'
    })

    //TESTE DE CONEXÃO COM O BANCO
    connection.connect(function (err) {
        //CASO DÊ ERRO
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    //DADOS DO INDEX
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value

    //VALIDAR SE O USUARIO EXISTE
    $validadeUser = 'SELECT * FROM `login_registro` WHERE `email` = "' + email + '" and `senha` ="' + senha + '"'

    connection.query($validadeUser, function (err, rows) {
        if (err) {
            console.log(err)
            return;
        }
        if (rows.length === 0) {
            window.alert('Usuário ou senha incorretos.')
            return;
        } else {
            window.location.href = 'cadastro.html'
        }
    })
}
