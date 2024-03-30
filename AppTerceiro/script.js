const images = [
    { src: "img/andre.jpg", answer: "andre" },
    { src: "img/pedro.jpg", answer: "pedro" },
    { src: "img/mariana.jpg", answer: "mariana" },
    { src: "img/navarro.jpg", answer: "joao lucas navarro" },
    { src: "img/thiago.jpg", answer: "thiago" },
    { src: "img/marcose.jpg", answer: "marcos eduardo" },
    { src: "img/karen.JPG", answer: "karen" },
    { src: "img/joaolucasp.jpg", answer: "joao lucas pereira" },
    { src: "img/luis.jpg", answer: "luis felipe" },
    { src: "img/leo.jpg", answer: "leonardo" },
    { src: "img/wesley.jpg", answer: "wesley" },
    { src: "img/igor.jpg", answer: "igor" },
    { src: "img/isa.JPG", answer: "isabelli" },
    { src: "img/marcosa.jpg", answer: "marcos andrei" },
    { src: "img/iris.JPG", answer: "iris" },
    { src: "img/mateus.jpg", answer: "mateus" },
    { src: "img/gui.jpg", answer: "guilherme" },
    { src: "img/mauricio.jpg", answer: "mauricio" },
    { src: "img/victo.jpg", answer: "victor" },
    // Adicione mais objetos para cada nova imagem
];

let points = 0;
let currentImageIndex = 0;
const totalImages = images.length;
const wrongGuesses = []; // Lista para armazenar os índices das imagens respondidas incorretamente

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = guessInput.value.toLowerCase().trim();
    const currentImage = images[currentImageIndex];
    const answer = currentImage.answer.toLowerCase(); // Converter resposta correta para minúsculas

    if (guess === currentImage.answer) {
        points++; // Adiciona um ponto se a resposta estiver correta
    } else {
        wrongGuesses.push(currentImageIndex); // Adiciona o índice da imagem respondida incorretamente
    }

    currentImageIndex++;
    if (currentImageIndex < totalImages) {
        loadCurrentImage();
    } else {
        showFinalMessage();
    }

    resetGuessInput();
}

function loadCurrentImage() {
    const currentImage = images[currentImageIndex];
    const imageElement = document.getElementById("image");
    imageElement.src = currentImage.src;
    imageElement.alt = "Palpite...";
}

function showFinalMessage() {
    let message;
    if (points === totalImages) {
        message = `Parabéns! Você ganhou a recompensa! Sua pontuação: ${points}/${totalImages}`;
    } else {
        message = `Infelizmente você não ganhou. Acertou apenas: ${points}/${totalImages}`;
        if (wrongGuesses.length > 0) {
            message += "<br>Os palpites errados foram:";
            wrongGuesses.forEach(index => {
                message += `<br>Pergunta ${index + 1}`;
            });
        }
    }
    showMessage(message);
    
    // Ocultar o campo de entrada, a imagem e o botão "Check"
    document.getElementById("guessInput").style.display = "none";
    document.getElementById("image").style.display = "none";
    document.getElementById("checkButton").style.display = "none";
}

function showMessage(message) {
    const messageContainer = document.getElementById("message");
    messageContainer.innerHTML = message;
}

function resetGuessInput() {
    const guessInput = document.getElementById("guessInput");
    guessInput.value = "";
}

window.onload = function() {
    loadCurrentImage();
};