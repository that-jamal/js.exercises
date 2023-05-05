/*

const modal = document.querySelector('.popup');
const editBtn = document.querySelector('#editBtn');
const closeBtn = document.querySelector('.close');
const saveBtn = document.querySelector('#save')

let username = document.getElementById("UserName")
let lastname = document.getElementById("LastName")
let age = document.getElementById("Age")

let u = localStorage.getItem("u")
let l = localStorage.getItem("l")
let a = localStorage.getItem("a")

saveBtn.addEventListener("click", function () {
    localStorage.setItem("u", u);
    localStorage.setItem("l", l);
    localStorage.setItem("a", a);
    count.textContent = number;

    username.textContent = u
    lastname.textContent = l
    age.textContent = a
    modal.style.display = "none";
});
// When the user clicks on the button, open the modal
editBtn.addEventListener("click", function () {
    modal.style.display = "block";
});
// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

/*
const profile = {
    username: "",
    lastname: "",
    age: ""
}*/

