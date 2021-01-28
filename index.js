function getData () {
    let xhttp = new XMLHttpRequest();
    let requestURL = "https://localhost:44337/api/PessoaFisicas";
    xhttp.responseType = "json";

    xhttp.open("GET", requestURL, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = this.response;
            list(data);
        }
    }
    xhttp.send();
}

function list(data) {
    let item;
    for (i = 0; i<data.length; i++)
    {
        item += "<tr>" +
                    "<td>" + data[i]['id'] + "</td>" +
                    "<td>" + data[i]['nome'] + "</td>" +
                    "<td>" + data[i]['dataNascimento'] + "</td>" +
                    "<td>" + data[i]['renda'] + "</td>" +
                    "<td>" + data[i]['cpf'] + "</td>" +
                    "<td><a href='./view/update.html?id=" + data[i]['id'] + "'>Alterar</a></td>" +
                    "<td><a href='./view/delete.html?id=" + data[i]['id'] + "'>Remover</a></td>" +
                    "<td><a href='./view/view.html?id=" + data[i]['id'] + "'>Visualizar</a></td>"
                "</tr>";
    }

    document.write(
        "<table class='table' style='width:45%'>" +
            "<thead>" +
                "<tr>" +
                    "<th>ID</th>" +
                    "<th>Nome</th>" +
                    "<th>Data de nascimento</th>" +
                    "<th>Renda</th>" +
                    "<th>CPF</th>" +
                    "<th cospan='3'>Ações</th>" +
                "</tr>"+
            "</thead>" +
            item +
        "</table>" +

        "<button><a href='./view/cadastro.html'>Cadastrar</a></button>"
    );
}
getData();