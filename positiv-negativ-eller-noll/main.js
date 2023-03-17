let number = document.getElementById("number")
let answer = document.getElementById("answer")
let input = document.querySelector("input");



input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        if (number.value == 0) {
            answer.innerText = "noll"
            answer.style.backgroundColor = ""

        } else if (number.value < 0) {
            answer.innerText = "negative"
            answer.style.backgroundColor = "red"

        } else if (number.value > 0) {
            answer.innerText = "positive"
            answer.style.backgroundColor = "green"

        }
    }
})