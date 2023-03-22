let input = document.querySelector("input");
let answer = document.getElementById("answer")
let objectDate = new Date();
let d = objectDate.getDate();
let m = objectDate.getMonth() + 1;
let y = objectDate.getFullYear();

let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")


function daysInMonth(month) {
    return new Date(2023, month, 0).getDate();
    //daysInMonth(3) = 31
}
let nowD
let nowM
let nowY

boxb.addEventListener("keypress", function (event) {
    nowD = d - day.value
    nowM = m - month.value
    nowY = y - year.value
    if (0 > nowD) {
        nowD = nowD + daysInMonth(3)
        nowM--
        if (0 > nowM) {
            nowM = nowM + 12
            nowY--
        }
    }
    if (0 > nowM) {
        nowM = nowM + 12
        nowY--
    }
    if (31 < day.value) {
        day.value = 31
    }
    if (12 < month.value) {
        month.value = 12
    }
    if (2023 < year.value) {
        year.value = 2023
    }


    answer.innerText = ("age = " + nowD + "D" + "/" + nowM + "M" + "/" + nowY + "Y")
})
