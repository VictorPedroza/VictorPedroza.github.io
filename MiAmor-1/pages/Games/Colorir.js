const wordList = ['PORTOFINO', 'GRECIA', 'TEAMO', 'TEQUIERO', 'TESINTO', 'LINDA', 'PICHULA', 'ALEGRIA'];
const gridRows = 10;
const gridCols = 10;

const gameGrid = document.getElementById('game-grid');
const wordsToFindList = document.getElementById('words-to-find');

let currentWord = ''; // Palavra que o usuário está tentando encontrar
let selectedCells = []; // Armazena as células selecionadas
let foundWords = []; // Armazena as palavras já encontradas

// Criar as células da grade
function createGrid() {
    for (let i = 0; i < gridRows; i++) {
        for (let j = 0; j < gridCols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('letter');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.dataset.occupied = 'false'; // Adiciona um dado para verificar se a célula está ocupada
            cell.addEventListener('click', handleCellClick); // Adiciona o evento de clique
            gameGrid.appendChild(cell);
        }
    }
}

// Colocar palavras na grade
function placeWords(wordList) {
    wordList.forEach(word => {
        let placed = false;
        while (!placed) {
            // Escolher uma posição aleatória para a palavra
            const row = Math.floor(Math.random() * gridRows);
            const col = Math.floor(Math.random() * gridCols);
            const direction = Math.floor(Math.random() * 4); // 0 = horizontal, 1 = vertical, 2 = diagonal, 3 = diagonal invertida
            const isReversed = Math.random() < 0.25; // 25% de chance de inverter a palavra

            if (canPlaceWord(word, row, col, direction)) {
                placeWord(word, row, col, direction, isReversed);
                placed = true;
            }
        }
    });
}

// Verificar se a palavra pode ser colocada em qualquer direção
function canPlaceWord(word, row, col, direction) {
    if (direction === 0) {
        // Verificar se a palavra cabe horizontalmente
        if (col + word.length > gridCols) return false;
        for (let i = 0; i < word.length; i++) {
            const cell = document.querySelector(`[data-row="${row}"][data-col="${col + i}"]`);
            if (cell.dataset.occupied === 'true') return false; // Se já houver letra, não pode colocar
        }
    } else if (direction === 1) {
        // Verificar se a palavra cabe verticalmente
        if (row + word.length > gridRows) return false;
        for (let i = 0; i < word.length; i++) {
            const cell = document.querySelector(`[data-row="${row + i}"][data-col="${col}"]`);
            if (cell.dataset.occupied === 'true') return false; // Se já houver letra, não pode colocar
        }
    } else if (direction === 2) {
        // Verificar se a palavra cabe diagonalmente (para baixo e para a direita)
        if (row + word.length > gridRows || col + word.length > gridCols) return false;
        for (let i = 0; i < word.length; i++) {
            const cell = document.querySelector(`[data-row="${row + i}"][data-col="${col + i}"]`);
            if (cell.dataset.occupied === 'true') return false; // Se já houver letra, não pode colocar
        }
    } else if (direction === 3) {
        // Verificar se a palavra cabe diagonalmente invertida (para cima e para a direita)
        if (row - word.length + 1 < 0 || col + word.length > gridCols) return false;
        for (let i = 0; i < word.length; i++) {
            const cell = document.querySelector(`[data-row="${row - i}"][data-col="${col + i}"]`);
            if (cell.dataset.occupied === 'true') return false; // Se já houver letra, não pode colocar
        }
    }
    return true;
}

// Colocar a palavra na grade
function placeWord(word, row, col, direction, isReversed) {
    const wordToPlace = isReversed ? word.split('').reverse().join('') : word;

    for (let i = 0; i < wordToPlace.length; i++) {
        const cell = document.querySelector(`[data-row="${row + (direction === 1 ? i : direction === 2 ? i : direction === 3 ? -i : 0)}"][data-col="${col + (direction === 0 ? i : direction === 2 || direction === 3 ? i : 0)}"]`);
        cell.textContent = wordToPlace[i];
        cell.dataset.occupied = 'true'; // Marca a célula como ocupada
    }
}

// Preencher as células restantes com letras aleatórias
function fillRemainingLetters() {
    const gridCells = document.querySelectorAll('.letter');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    gridCells.forEach(cell => {
        if (!cell.textContent) {
            cell.textContent = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            cell.dataset.occupied = 'true'; // Marca a célula como ocupada
        }
    });
}

// Função que lida com o clique nas células
function handleCellClick(event) {
    const cell = event.target;
    const letter = cell.textContent;

    // Se a célula já foi encontrada, não permita mais selecioná-la
    if (cell.classList.contains('found')) {
        return; // Célula já encontrada, não permite seleção
    }

    // Se a célula já foi selecionada, desfaz a seleção
    if (selectedCells.includes(cell)) {
        cell.classList.remove('selected');
        selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell);
        return;
    }

    // Se a célula pertence à palavra atual, seleciona ela
    if (currentWord && letter === currentWord[selectedCells.length]) {
        cell.classList.add('selected');
        selectedCells.push(cell);
    }

    // Se o número de células selecionadas for igual ao tamanho da palavra
    if (selectedCells.length === currentWord.length) {
        checkWord(); // Verifica se a palavra foi formada corretamente
    }
}

// Função para verificar se a palavra foi formada corretamente
function checkWord() {
    const word = currentWord;
    const selectedLetters = selectedCells.map(cell => cell.textContent).join('');

    if (word === selectedLetters) {
        selectedCells.forEach(cell => {
            cell.classList.add('found'); // Destaca a palavra encontrada na grade
        });

        // Muda a cor da palavra na lista para verde
        const wordItem = Array.from(wordsToFindList.children).find(li => li.textContent === word);
        if (wordItem) {
            wordItem.classList.add('found-word'); // Marca a palavra na lista
        }

        foundWords.push(word); // Adiciona a palavra encontrada à lista de palavras encontradas
    } else {
        // Se a palavra não foi formada corretamente, desmarcar as células
        selectedCells.forEach(cell => cell.classList.remove('selected'));
    }

    // Limpar a seleção para a próxima palavra
    selectedCells = [];
    currentWord = ''; // Reseta a palavra atual
}

// Exibir as palavras para encontrar
wordList.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    li.addEventListener('click', () => startNewWord(word)); // Permite iniciar a busca pela palavra
    wordsToFindList.appendChild(li);
});

// Iniciar a busca por uma nova palavra
function startNewWord(word) {
    currentWord = word;
    selectedCells = [];
    resetGrid(); // Reseta a seleção na grade
}

// Reseta a seleção na grade
function resetGrid() {
    const cells = document.querySelectorAll('.letter');
    cells.forEach(cell => {
        cell.classList.remove('selected');
    });
}

// Inicializar o jogo
createGrid();
placeWords(wordList);
fillRemainingLetters();
