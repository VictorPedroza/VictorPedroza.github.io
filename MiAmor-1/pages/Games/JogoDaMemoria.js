const images = [
    './Love/love1.jpg',
    './Love/love2.jpg',
    './Love/love3.jpg',
    './Love/love4.jpg',
    './Love/love5.jpg',
    './Love/love6.jpg',
    './Love/love1.jpg',
    './Love/love2.jpg',
    './Love/love3.jpg',
    './Love/love4.jpg',
    './Love/love5.jpg',
    './Love/love6.jpg',
];
const gameContainer = document.getElementById('game-container');
let flippedCards = [];
let matchedCards = 0;

function createCard(imagePath) {
    const card = document.createElement('div');
    card.classList.add('card');

    const front = document.createElement('div');
    front.classList.add('card-front');
    front.style.backgroundImage = `url(${imagePath})`;

    const back = document.createElement('div');
    back.classList.add('card-back');

    card.appendChild(front);
    card.appendChild(back);

    // Adiciona o evento de clique para virar a carta
    card.addEventListener('click', () => flipCard(card));

    return card;
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.card-front').style.backgroundImage;
    const img2 = card2.querySelector('.card-front').style.backgroundImage;

    if (img1 === img2) {
        flippedCards.forEach(card => card.classList.add('matched'));
        matchedCards += 2;
        flippedCards = [];

        if (matchedCards === images.length) {
            alert('Você ganhou!');
        }
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
        }, 1000);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializa o jogo
const shuffledImages = shuffleArray(images);
shuffledImages.forEach(image => {
    const card = createCard(image);
    gameContainer.appendChild(card);
});