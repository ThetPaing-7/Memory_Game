// Craet board function
function createBoard(){
    let images = [
        {
            name: "butterfly",
            src:"Memory_game_images/butterfly.png"
        },
        {
            name: "trutle",
            src:"Memory_game_images/trutle.png"
        },
        {
            name: "dragon",
            src:"Memory_game_images/dragon.png"
        },
        {
            name: "star",
            src:"Memory_game_images/star.png"
        },
        {
            name: "snowleapoard",
            src:"Memory_game_images/snowleapoard.png"
        },
        {
            name: "forest",
            src:"Memory_game_images/forest.png"
        },
        {
            name: "butterfly",
            src:"Memory_game_images/butterfly.png"
        },
        {
            name: "trutle",
            src:"Memory_game_images/trutle.png"
        },
        {
            name: "dragon",
            src:"Memory_game_images/dragon.png"
        },
        {
            name: "star",
            src:"Memory_game_images/star.png"
        },
        {
            name: "snowleapoard",
            src:"Memory_game_images/snowleapoard.png"
        },
        {
            name: "forest",
            src:"Memory_game_images/forest.png"
        },

    ]

    // Sort array randomly
    let randomImages = images.sort(() => Math.random() - 0.5)

    let clickedCards = []
    let clickedIds = []
    let clickElement = []

    let socorehold = document.getElementById("score")
    let score = 0

    let clickCountHolder = document.getElementById("clickCount")
    let clickCount = 0;
    // Grab the grid and create blank display
    let grid = document.getElementById("grid")
    for(let i = 0; i < 12; i++){
        let item = document.createElement("img")
        item.setAttribute("src","Memory_game_images/cover.png")
        item.setAttribute("data-item",i)
        item.addEventListener("click",flipCard)
        clickElement.push(item)
        grid.append(item)
    }

    // Show the score


    //flip the card when user click
    function flipCard(){
        let cardNumber = this.getAttribute("data-item")
        this.setAttribute("src",randomImages[cardNumber].src)
        clickedCards.push(randomImages[cardNumber].name)
        clickedIds.push(cardNumber)

        // Update the click cout
        clickCount++;
        clickCountHolder.textContent = clickCount;
        // Check only afther two cards has shown
        if(clickedCards.length === 2){

            setTimeout(checkMatch,500)
        }
    }

    // Check match function
    function checkMatch(){

    let cards = document.querySelectorAll("img")

    const optionOneId = clickedIds[0];
    const optionTwoId = clickedIds[1];

    if(clickedCards.length === 2){

        if(clickedCards[0] === clickedCards[1]){
            console.log("It is a mactch")
             clickElement[optionOneId].setAttribute("src","Memory_game_images/blankImages.jpg")
             clickElement[optionTwoId].setAttribute("src","Memory_game_images/blankImages.jpg")
             score++;
        } else {
            console.log("Not a mcuh, flip that back over")
            clickElement[optionOneId].setAttribute("src","Memory_game_images/cover.png")
            clickElement[optionTwoId].setAttribute("src","Memory_game_images/cover.png")
        }
        
        socorehold.textContent = score

        // Reset for the next turn
        clickedCards = [];
        clickedIds = [];
    }

    console.log(cards[optionOneId])
    console.log(cards[optionTwoId])
    console.log(cards)
}

        
}

    


console.log(createBoard())