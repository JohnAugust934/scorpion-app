//Entrar na consulta
function consulta() {
    window.location.href = "consulta.html"
}

//Cancelar cadastro
function cancelar() {
    window.location.href = "cadastro.html"
}

//Voltar para index
function voltar() {
    window.location.href = "index.html"
}

//Cadastro do produto
function cadastrar() {
    var mysql = require('mysql')
    //CONEXÃO COM BANCO
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: null,
        database: 'mydb'
    })

    //Teste de conexão com o banco
    connection.connect(function (err) {
        //Caso de erro
        if (err) {
            console.log(err)
        } else {
            console.log('sucesso')
        }
    })

    //Dados do cadastro
    var nome = document.getElementById('inputName').value
    var categoria = document.getElementById('inputCategoria').value
    var descricao = document.getElementById('textarea').value

    $saveProduct = 'INSERT INTO `cadastro_consulta` (`nome`, `categoria`, `descricao`) VALUES ("' + nome + '", "' + categoria + '", "' + descricao + '")'

    connection.query($saveProduct, function (err, rows) {
        if (err) {
            console.log(err)
            return;
        }
        if (rows.lenght === 0) {
            window.alert('Algum campo não foi preenchido.')
            return;
        } else {
            window.alert('Produto cadastrado!')
        }
    })
}
