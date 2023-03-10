let button = document.querySelector("button");
let number

button.addEventListener("click", function () {
    number = Math.floor(Math.random() * 6 + 1);
    console.log(number)
    role()
})

function role() {
    if (number == 5) {
        console.log("five")
    }
}
