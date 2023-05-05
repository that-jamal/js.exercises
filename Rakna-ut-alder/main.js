/*
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
        nowD = nowD + daysInMonth(nowM)
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
    console.log(nowM)

    answer.innerText = ("age = " + nowD + "D" + "/" + nowM + "M" + "/" + nowY + "Y")
})
console.log(month)
*/
const inputElement = document.querySelector('input');
const divElement = document.querySelector('div');

inputElement.addEventListener('change', () => {
    const result = computeAge(inputElement.value);
    divElement.innerHTML = `
    Du är ${result.years} år och ${result.days} dagar gammal
  `;
});

/**
 * @param {string} dateOfBirth 
 * @returns {{years: number, days: number}}
 */
function computeAge(dateOfBirth) {
    const now = new Date();
    const birtdate = new Date(dateOfBirth);

    if ((now.getMonth() > birtdate.getMonth()) || (now.getMonth() === birtdate.getMonth() && now.getDate() >= birtdate.getDate())) {
        const thisYearBirtDate = new Date(`${now.getFullYear()}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

        return {
            years: now.getFullYear() - birtdate.getFullYear(),
            days: Math.floor((now.getTime() - thisYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
        };
    }
    else {
        const lastYearBirtDate = new Date(`${now.getFullYear() - 1}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

        return {
            years: now.getFullYear() - birtdate.getFullYear() - 1,
            days: Math.floor((now.getTime() - lastYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
        }
    }
}