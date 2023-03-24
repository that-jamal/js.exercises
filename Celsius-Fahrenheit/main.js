let input = document.querySelector("input");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");



fahrenheit.addEventListener("keypress", function (event) {
    setTimeout(function () {
        celsius.value = (fahrenheit.value - 32) * 5 / 9
    })
})
celsius.addEventListener("keypress", function (event) {
    setTimeout(function () {
        fahrenheit.value = celsius.value * 9 / 5 + 32
    }, 1);
})