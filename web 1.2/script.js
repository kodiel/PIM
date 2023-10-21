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
function horas() {
    window.location.href = 'horas.html';
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

function calcularHorasTrabalhadas() {
    // Obter os elementos de entrada de hora de início e término
    var horaInicioInput = document.getElementById("hora_inicio");
    var horaFimInput = document.getElementById("hora_fim");

    // Obter os valores das entradas de hora
    var horaInicio = horaInicioInput.value;
    var horaFim = horaFimInput.value;

    // Converter os valores para objetos Date
    var dataHoraInicio = new Date("1970-01-01T" + horaInicio);
    var dataHoraFim = new Date("1970-01-01T" + horaFim);

    // Calcular a diferença em milissegundos
    var diferencaMilissegundos = dataHoraFim - dataHoraInicio;

    // Converter a diferença em horas
    var horasTrabalhadas = diferencaMilissegundos / (1000 * 60 * 60);

    // Exibir a quantidade de horas trabalhadas
    var resultado = document.getElementById("horas_trabalhadas");
    resultado.textContent = "Quantidade de Horas: " + horasTrabalhadas;
}