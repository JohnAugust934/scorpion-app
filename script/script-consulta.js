//Voltar para tela de consulta
function voltar() {
    window.location.href = "cadastro.html"
}

//Tabela
(function () {
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

    $consultaProduto = 'SELECT * FROM cadastro_consulta'

    connection.query($consultaProduto, function (err, rows) {
        if (err) {
            console.log(err)
            return
        }
        var html = ''

        rows.forEach(function (row) {
            html += '<tr>'
            html += '<th scope="row">'
            html += row.nome
            html += '</th>'
            html += '<td>'
            html += row.categoria
            html += '</td>'
            html += '<td>'
            html += row.descricao
            html += '</td>'
            html += '</tr>'
        })

        document.querySelector('#tabela > tbody').innerHTML = html
    })
})()



