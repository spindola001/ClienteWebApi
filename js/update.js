let form = document.getElementById("formUpdate");
var xhttp = new XMLHttpRequest();
var requestURL = "https://localhost:44337/api/PessoaFisicas"
xhttp.responseType = "json";

function update(json) {
    let urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('id')) {
        alert("Você não especificou o ID!!!");
        return;
    }
    let id = urlParams.get('id');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // retornar sucesso
        }
    }

    xhttp.open("PUT", requestURL + "/" + id, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(json);
}

function getData(form) {

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = this.response;
            form.id.value = data.id;
            form.nome.value = data.nome;
            form.dataNascimento.value = data.dataNascimento;
            form.renda.value = data.renda;
            form.cpf.value = data.cpf;
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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var object = {};
    let formData = new FormData(event.target);
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    let json = JSON.stringify(object);
    update(json);
});

getData(form);