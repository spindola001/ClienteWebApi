let form = document.getElementById("formCadastro");

function insert(json) {
    let xhttp = new XMLHttpRequest();
    let requestURL = "https://localhost:44337/api/PessoaFisicas"
    xhttp.responseType = "json";

    // xhttp.onreadystatechange = function () {
    //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //         console.log("Sucesso!");
    //     }
    // }

    xhttp.open("POST", requestURL, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(json);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var object = {};
    let formData = new FormData(event.target);
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    let json = JSON.stringify(object);

    insert(json);
});