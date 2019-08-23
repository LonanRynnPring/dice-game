const score = document.querySelector("#score");
const image = document.querySelector("#image");
const button = document.querySelector("#button");


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

button.addEventListener("click", ()=>{
    image.style.display = "inline-block";
    let num = Math.floor(Math.random() * 6); 
    image.src = diceArray[num].link;
    score.textContent = parseInt(score.textContent)+parseInt(diceArray[num].value);
    if (parseInt(score.textContent) >= 20){
        alert(`You win, your score was ${score.textContent}`);
        score.textContent = 0;
        image.style.display = "none";
    }
    else if (diceArray[num].value == 1){
        alert("You lose");
        score.textContent = 0;
        image.style.display = "none";
    }
    
})
