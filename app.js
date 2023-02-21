const CARD_BACK = "/images/card_back.jpg";

const cardsImages = [
    "images/hearts/ace_of_hearts.png",
    "images/hearts/seven_of_hearts.jpg",
    "images/hearts/two_of_hearts.jpg",
    "images/spades/ace_of_spades.jpg",
    "images/spades/six_of_spades.jpg",
    "images/spades/ten_of_spades.jpg",
    "images/diamonds/ace_of_diamonds.jpg",
    "images/diamonds/ten_of_diamonds.jpg",
    "images/diamonds/three_of_diamonds.jpg",
    "images/clubs/ace_of_clubs.jpg",
    "images/clubs/three_of_clubs.jpg",
    "images/clubs/two_of_clubs.jpg",
]

document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");

    let cards = [...cardsImages, ...cardsImages]

    const board = shuffleArray(cards);

    board.forEach((card, index) => {
        const element = `<a href="#"><img id=${index} class="card" src="/images/card_back.jpg" alt="card number ${index}"></a>`
        container.insertAdjacentHTML("beforeend", element);
    });

    cards = document.getElementsByClassName("card")

    let selectedCards = []
    let ids = []

    Array.from(cards).forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault()
            selectedCards.push(board[e.target.id])
            ids.push(e.target.id)
            e.target.setAttribute("src", board[e.target.id])
            if (selectedCards.length === 2) {
                if (selectedCards[0] === selectedCards[1]) {
                    ids = []
                    selectedCards = []
                } else {
                    document.getElementById(ids[0]).setAttribute("src", CARD_BACK);
                    document.getElementById(ids[1]).setAttribute("src", CARD_BACK);
                    ids.length = 0
                    selectedCards.length = 0
                }
            }

        });
        if (isFinished() === undefined) removeEventListener('click', card);
        console.log(isFinished())
    })



});

function isFinished() {
    const cards = document.getElementsByClassName("card");
    return Array.from(cards).find(card => card.getAttribute("src") === CARD_BACK)
}

function isEqual(selectedCards) {
    return selectedCards[0].getAttribute("src") === selectedCards[1].getAttribute("src")
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}