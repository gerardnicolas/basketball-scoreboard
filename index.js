let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreH = 0
let scoreG = 0

//HOME
function addOnePointHome(){
    scoreH += 1
    scoreHome.textContent = scoreH
}

function addTwoPointsHome(){
    scoreH += 2
    scoreHome.textContent = scoreH
}

function addThreePointsHome(){
    scoreH += 3
    scoreHome.textContent = scoreH
}

//GUEST
function addOnePointGuest(){
    scoreG += 1
    scoreGuest.textContent = scoreG
}

function addTwoPointsGuest(){
    scoreG += 2
    scoreGuest.textContent = scoreG
}

function addThreePointsGuest(){
    scoreG += 3
    scoreGuest.textContent = scoreG
}

//EXTRA BUTTONS

function newGame(){
    scoreH = 0
    scoreG = 0
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
}