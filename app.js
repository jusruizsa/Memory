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

    const cards = [...cardsImages, ...cardsImages]

    const board = shuffleArray(cards)

    console.log(board)

    board.forEach((card, index) => {
        const element = `<a href="#" id="${index}"><img src="/images/card_back.jpg" alt="card number ${index}"></a>`
        container.insertAdjacentHTML("beforeend", element);
    });

});

let listOfCards = document.getElementsByTagName("a")

let selectedCard = [...listOfCards]

console.log(selectedCard)


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}