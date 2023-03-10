let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let newColor

document.getElementById("submit").addEventListener("click", function () {
    if (red.value > 255) {
        red.value = 255
    } else if (red.value <= 0) {
        red.value = 0
    }
    if (green.value > 255) {
        green.value = 255
    } else if (green.value <= 0) {
        green.value = 0
    }
    if (blue.value > 255) {
        blue.value = 255
    } else if (blue.value <= 0) {
        blue.value = 0
    }

    newColor = `rgb(${red.value},${green.value},${blue.value})`;

    document.getElementById("back").style.backgroundColor = newColor

    console.log(newColor)

})