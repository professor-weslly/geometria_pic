var pontuacao = 0;
var currentQuestion = 0;
var slides = document.querySelectorAll('.question-slide');
var drawing = false;
var context = document.getElementById('drawCanvas').getContext('2d');

function avancarPergunta(pergunta, respostaCorreta) {
    var resultado = verificarResposta(pergunta, respostaCorreta);

    if (resultado.respostaSelecionada === "") {
        mostrarCustomAlert(resultado.mensagem);
        return; // Não avança para a próxima pergunta se nenhuma resposta for selecionada
    }

    mostrarCustomAlert(resultado.mensagem);

    setTimeout(function() {
        if (resultado.correto) {
            pontuacao++;
        }

        ocultarSlide(currentQuestion);
        currentQuestion++;

        if (currentQuestion < slides.length) {
            mostrarSlide(currentQuestion);
        } else {
            exibirResultadoFinal();
        }
    }, 3000); // Espera 3 segundos antes de avançar para a próxima pergunta
}

function verificarResposta(pergunta, respostaCorreta) {
    var opcoes = document.getElementsByName(pergunta);
    var respostaSelecionada = "";

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostaSelecionada = opcoes[i].value;
            break;
        }
    }

    if (respostaSelecionada === "") {
        return { correto: false, mensagem: "Por favor, selecione uma resposta.", respostaSelecionada: "" };
    }

    if (respostaSelecionada === respostaCorreta) {
        return { correto: true, mensagem: "Resposta correta!", respostaSelecionada: respostaSelecionada };
    } else {
        return { correto: false, mensagem: "Resposta incorreta!", respostaSelecionada: respostaSelecionada };
    }
}

function mostrarSlide(index) {
    slides[index].classList.add('active');
}

function ocultarSlide(index) {
    slides[index].classList.remove('active');
}

function exibirResultadoFinal() {
    ocultarSlide(currentQuestion);
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
    document.getElementById("pontuacao").style.display = "block";
    document.getElementById("restartButton").style.display = "block";
}

function mostrarCustomAlert(mensagem) {
    var customAlert = document.getElementById("customAlert");
    customAlert.querySelector(".message").innerText = mensagem;
    customAlert.classList.add("show");
}

function fecharCustomAlert() {
    var customAlert = document.getElementById("customAlert");
    customAlert.classList.remove("show");
}

function reiniciarQuiz() {
    setTimeout(function() {
        pontuacao = 0;
        currentQuestion = 0;
        document.getElementById("pontuacao").style.display = "none";
        document.getElementById("restartButton").style.display = "none";
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Limpar o canvas
        ocultarTodosSlides();
        mostrarSlide(currentQuestion);
    }, 2000); // Espera 2 segundos antes de reiniciar o quiz
}

function ocultarTodosSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
}



function iniciarDesenho(event) {
    drawing = true;
    context.beginPath();
    context.moveTo(event.offsetX, event.offsetY);
}

function desenhar(event) {
    if (drawing) {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
    }
}

function finalizarDesenho() {
    drawing = false;
}

function verificarDesenho() {
    // Implementar lógica para verificar se o desenho é um cubo
    mostrarCustomAlert("Desenho verificado! (Lógica de verificação a ser implementada)");
    exibirResultadoFinal();
}

// Eventos para desenhar no canvas
var canvas = document.getElementById('drawCanvas');
canvas.addEventListener('mousedown', iniciarDesenho);
canvas.addEventListener('mousemove', desenhar);
canvas.addEventListener('mouseup', finalizarDesenho);
canvas.addEventListener('mouseout', finalizarDesenho);
