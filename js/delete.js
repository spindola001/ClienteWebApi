let form = document.getElementById("formDelete");
var xhttp = new XMLHttpRequest();
var requestURL = "https://localhost:44337/api/PessoaFisicas"
xhttp.responseType = "json";

function remove() {
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

    xhttp.open("DELETE", requestURL + "/" + id, true);
    xhttp.send();
}

function getData(form) {

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = this.response;
            form.id.value = data.id;
        }
    }

    let urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('id')) {
        alert("Você não especificou o ID!!!");
        return;
    }
    let id = urlParams.get('id');
    for (let param of urlParams) {
        console.log(param)
    } 
    xhttp.open("GET", requestURL + "/" + id, true);
    xhttp.send();  
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData.get("confirm"));
    if (formData.get("confirm") == "on") {
        remove();    
    }
    
});

getData(form);