let input = document.querySelector("input");
//let answer = document.getElementById("answer")
let objectDate = new Date();
let d = objectDate.getDate();
let m = objectDate.getMonth() + 1;
let y = objectDate.getFullYear();

let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")

let nowD
let nowM
let nowY

year.addEventListener("keypress", function (event) {
    nowD = d - day.value
    nowM = m - month.value
    nowY = y - year.value

    answer()

})

function answer() {
    if (0 > nowM) {
        nowM + 12
        nowY - 1

    }


    // console.log(nowD + "/" + nowM + "/" + nowY)
    console.log(nowM)
}
day.value = 4
year.value = 2005
month.value = 4