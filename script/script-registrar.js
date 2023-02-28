//BOTÃO DE CANCELAR O CADASTRO
function cancelar() {
    window.location.href = "index.html"
}

//BOTÃO DE REGISTRAR
function registrar() {
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

    //Dados do registro
    var nome = document.getElementById('inputName').value
    var email = document.getElementById('inputEmail').value
    var nascimento = document.getElementById('inputNascimento').value
    var telefone = document.getElementById('inputTelefone').value
    var senha = document.getElementById('inputSenha').value

    $registerUser = 'INSERT INTO `login_registro` (`nome`, `email`, `nascimento`, `telefone`, `senha`) VALUES ("' + nome + '", "' + email +'", "' + nascimento +'", "' + telefone +'", "' + senha +'")'

    connection.query($registerUser, function (err, rows) {
        if (err) {
            console.log(err)
            return;
        }
        if (rows.lenght === 0) {
            window.alert('Algum campo não foi preenchido.')
            return;
        } else {
            window.location.href= "cadastro.html"
        }
    })
}