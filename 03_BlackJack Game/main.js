// Blackjack Game State
let cards = []      // Array to store current hand
let sum = 0         // Total value of cards
let hasBlackJack = false
let isAlive = false
let message = ""

// Game Display Elements
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

// Player Profile
let player = {
    name: 'Malik',
    chips: 145
}

// Display player info
let playerEl = document.getElementById('player-el')
playerEl.textContent = `${player.name}: $${player.chips}`

// Card Generator (Ace = 11, Face cards = 10)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10)
        return 10  // Jack, Queen, King
    else if (randomNumber === 1)
        return 11  // Ace
    else
        return randomNumber  // Number cards 2-10
}

// Initialize new game with 2 cards
function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Update game display and check win conditions
function renderGame() {
    // Show current hand
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum

    // Determine game status
    if (sum < 21) {
        message = "Draw another card?"
    } else if (sum === 21) {
        message = "Blackjack! You win! 🥳"
        hasBlackJack = true
    } else {
        message = "Busted! Game over 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

// Draw additional card if game is still active
function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}