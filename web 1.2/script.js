function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = 'menu.html';
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function cadFuncionarios() {
    window.location.href = 'cadastro.html';
}

function ferias() {
    window.location.href = 'ferias.html';
}
function HorasExtras () {
    window.location.href = 'horas-extras.html';
}

function showFolhaDePagamento() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("folhaDePagamento").style.display = "block";
}

function buscarFuncionario() {
    var searchInput = document.getElementById("searchInput").value;
}

function verFolhaDePagamento() {
    var codigoFolha = document.getElementById("codigoFolha").value;
}

function voltarMenu() {
    window.location.href = 'menu.html';
}

function verDataAtual() {
    var dataAtual = new Date();

    var ano = dataAtual.getFullYear();
    var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    var dia = dataAtual.getDate().toString().padStart(2, '0');

    var hrAtual = dia + '/' + mes + '/' + ano; // Formato dia/mês/ano
    document.getElementById("data_soli").textContent = hrAtual;
}
verDataAtual();