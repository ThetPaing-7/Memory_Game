// Factory function for memory game
function MemoryGame(gridId, scoreId, clickcountId){
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
    
    ]

    const cards = [...images, ...images]

    let randomImages = images.sort(() => Math.random() - 0.5)

    let clickedCards = []
    let clickedIds = []
    let clickElement = []

    let score = 0
    let clickCount = 0

    const grid = document.getElementById(gridId)
    const scoreHolder = document.getElementById(scoreId)
    const clickCountHolder = document.getElementById(clickcountId)

    // private function
    function initBoard(){
            for(let i = 0; i < cards.length; i++){
            let item = document.createElement("img")
            item.setAttribute("src","Memory_game_images/cover.png")
            item.setAttribute("data-item",i)
            item.addEventListener("click",flipCard)
            clickElement.push(item)
            grid.append(item)
        }
    }


    // Flip card function
    function flipCard(){
        let cardNumber = this.getAttribute("data-item")
        this.setAttribute("src",cards[cardNumber].src)
        clickedCards.push(cards[cardNumber].name)
        clickedIds.push(cardNumber)

        // Update the click cout
        clickCount++;
        clickCountHolder.textContent = clickCount;
        // Check only afther two cards has shown
        if(clickedCards.length === 2){

            setTimeout(checkMatch,500)
        }
    }

    function checkMatch(){
        const[firstId, secondId] = clickedIds;
        if(clickedCards[0] === clickedCards[1]){
            console.log("It is a mactch")
             clickElement[firstId].setAttribute("src","Memory_game_images/blankImages.jpg")
             clickElement[secondId].setAttribute("src","Memory_game_images/blankImages.jpg")
             score++;
        } else {
            console.log("Not a mcuh, flip that back over")
            clickElement[firstId].setAttribute("src","Memory_game_images/cover.png")
            clickElement[secondId].setAttribute("src","Memory_game_images/cover.png")
        }
        
        scoreHolder.textContent = score

        // Reset for the next turn
        clickedCards = [];
        clickedIds = [];

    }

    return{
        init: initBoard,
        getScore: () => score,
        getClicks: () => clickCount,
        reset: () => {
            grid.innerHTML = "";
            clickedCards = [];
            clickedIds = [];
            clickElement = [];
            score = 0;
            clickCount = 0;
            scoreHolder.textContent = score;
            clickCountHolder.textContent = clickCount;
            init();
        }
    }

}


const game = MemoryGame("grid", "score", "clickCount")
game.init();