var xhttp = new XMLHttpRequest();
var requestURL = "https://localhost:44337/api/PessoaFisicas"
xhttp.responseType = "json";

function getData() {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = this.response;
            returnData(data);
        }
    }

    let urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('id')) {
        alert("Você não especificou o ID!!!");
        return;
    }
    let id = urlParams.get('id'); 
    xhttp.open("GET", requestURL + "/" + id, true);
    xhttp.send();  
}

function returnData(data) {
    document.write(
        "<table style='width:30%'>" +
            "<tr>" +
                "<th>ID</th>" +
                "<th>Nome</th>" +
                "<th>Data de nascimento</th>" +
                "<th>Renda</th>" +
                "<th>CPF</th>" +
            "</tr>"+
            "<tr>" +
                "<td>" + data['id'] + "</td>" +
                "<td>" + data['nome'] + "</td>" +
                "<td>" + data['dataNascimento'] + "</td>" +
                "<td>" + data['renda'] + "</td>" +
                "<td>" + data['cpf'] + "</td>" +
            "</tr>" +
        "</table>"
    );
}

getData();