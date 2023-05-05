let plus = document.getElementById("+")
let count = document.getElementById("=")
let minus = document.getElementById("-")
let number = localStorage.getItem("number");

plus.addEventListener("click", function () {
    number++
    update()
    localStorage.setItem("number", number);
    count.textContent = number;
})

minus.addEventListener("click", function () {
    number--
    update()
    localStorage.setItem("number", number);
    count.textContent = number;
})

function update() {
    count.innerText = number
}

update()
