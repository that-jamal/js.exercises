let plus = document.getElementById("+")
let count = document.getElementById("=")
let minus = document.getElementById("-")


plus.addEventListener("click", function () {
    number++
    console.log(number)
    update()
    localStorage.setItem("number", number);
    count.textContent = number;
})

minus.addEventListener("click", function () {
    number--
    console.log(number)
    update()
    localStorage.setItem("number", number);
    count.textContent = number;
})

function update() {
    count.innerText = number
}
//-------------------------- AI

// Retrieve the stored value from local storage
let number = localStorage.getItem("number");

// If no value is stored, set the default value to 1
if (!number) {
    number = 0;
    localStorage.setItem("number", number);
}

count.textContent = number;
