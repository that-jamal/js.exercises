let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let hand1 = document.getElementById("hand1");
let hand2 = document.getElementById("hand2");
let text = document.getElementById("text");
let back = document.getElementById("body")
let number
let urhand

first.addEventListener("click", function () {
    urhand = 0
    hand1.src = (pictures[0].h)
    sethand()
})


second.addEventListener("click", function () {
    urhand = 1
    hand1.src = (pictures[1].h)
    sethand()
})


third.addEventListener("click", function () {
    urhand = 2
    hand1.src = (pictures[2].h)
    sethand()
})

function sethand() {
    number = Math.floor(Math.random() * 3);
    hand2.src = (pictures[number].h)
    console.log(urhand)
    console.log(number)

    if (urhand == number) {
        text.innerText = "Tie!"
    } else if (urhand == 0 && number == 2) {
        text.innerText = "WINNER!"
    } else if (urhand == 0 && number == 1) {
        text.innerText = "loser!"
        //document.body.style.backgroundColor = "red"
    } else if (urhand == 1 && number == 0) {
        text.innerText = "WINNER!"
    } else if (urhand == 1 && number == 2) {
        text.innerText = "loser!"
        //document.body.style.backgroundColor = "red"
    } else if (urhand == 2 && number == 0) {
        text.innerText = "loser!"
        //document.body.style.backgroundColor = "red"
    } else if (urhand == 2 && number == 1) {
        text.innerText = "WINNER!"
    }
}

const pictures = [
    {
        num: 0,
        h: "https://cdn.discordapp.com/attachments/691020853248262184/1085513598362718229/rock.png"
    },
    {
        num: 1,
        h: "https://cdn.discordapp.com/attachments/691020853248262184/1085513598601789460/papper.png"
    },
    {
        num: 2,
        h: "https://cdn.discordapp.com/attachments/691020853248262184/1085513598136238140/sissors.png"
    },
]