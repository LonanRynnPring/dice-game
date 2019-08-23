const score = document.querySelector("#score");
const image = document.querySelector("#image");
const button = document.querySelector("#button");
const score2 = document.querySelector("#score2");
const hold = document.querySelector("#hold");
const currentScore = document.querySelector("#currentScore");
const play1 = document.querySelector("#play1");
const play2 = document.querySelector("#play2");

let player = score;

play1.style.color = "white";
play1.style.textDecoration = "underline";

class Dice{
    constructor(value, link){
        this._value = value;
        this._link = link;
    }
    get value(){
        return this._value;
    }
    get link(){
        return this._link;
    }
}

const one = new Dice(1, "img/dice1.png")
const two = new Dice(2, "img/dice2.png")
const three = new Dice(3, "img/dice3.png")
const four = new Dice(4, "img/dice4.png")
const five = new Dice(5, "img/dice5.png")
const six = new Dice(6, "img/dice6.png")

diceArray = [one, two, three, four, five, six];

function check () {
    if (parseInt(player.textContent) >= 20){
        alert(`You win, your score was ${player.textContent}`);
        score.textContent = 0;
        score2.textContent = 0;
        image.style.display = "none";
    }
}

function active () {
    if (player == score){
        play1.style.color = "white";
        play1.style.textDecoration = "underline";
        play2.style.color = "black";
        play2.style.textDecoration = "none";
    }
    else {
        play2.style.color = "white";
        play2.style.textDecoration = "underline";
        play1.style.color = "black";
        play1.style.textDecoration = "none";
    }
}


button.addEventListener("click", ()=>{
    image.style.display = "inline-block";
    let num = Math.floor(Math.random() * 6); 
    image.src = diceArray[num].link;
    currentScore.textContent = parseInt(currentScore.textContent)+parseInt(diceArray[num].value);
    
    if (diceArray[num].value == 1){
        currentScore.textContent = 0;
        if (player == score){
            player = score2;
            active()
        }
        else {
            player = score;
            active()
        }
    }
    
})



hold.addEventListener("click",()=>{
    if (player == score){
        score.textContent = parseInt(score.textContent)+parseInt(currentScore.textContent)
        check()
        player = score2
        active()
        currentScore.textContent = 0
    }
    else {
        score2.textContent = parseInt(score2.textContent)+parseInt(currentScore.textContent)
        check()
        player = score
        active()
        currentScore.textContent = 0
    }
})

