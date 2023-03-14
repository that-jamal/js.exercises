let box = document.getElementById("box1")
let button = document.querySelector("button");
let number

button.addEventListener("click", function (e) {
    e.preventDefault;
    box.classList.remove("run-animation");
    void box.offsetWidth;
    box.classList.add("run-animation");
}, false);

button.addEventListener("click", function () {
    number = Math.floor(Math.random() * 6);
    role()
})


pictures = [{
    num: 1,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737400359616522/1_dice.png"
},
{
    num: 2,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737400141529118/2_dice.png"
},
{
    num: 3,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737399902457856/3_dice.png"
}, {
    num: 4,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737399659167784/4_dice.png"
}, {
    num: 5,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737399420108870/5_dice.png"
}, {
    num: 6,
    dice: "https://cdn.discordapp.com/attachments/691020853248262184/1084737399193620500/6_dice.png"
}]

function role() {
    console.log(pictures[number].num)
    box.src = (pictures[number].dice)
}

number = Math.floor(Math.random() * 6);
console.log(number)
role()