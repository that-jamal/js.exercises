let plus = document.getElementById("+")
let count = document.getElementById("=")
let minus = document.getElementById("-")
let number = localStorage.getItem("number");

plus.addEventListener("click", function () {
    number++
    localStorage.setItem("number", number);
    count.textContent = number;
})

minus.addEventListener("click", function () {
    number--
    localStorage.setItem("number", number);
    count.textContent = number;
})
count.textContent = number
