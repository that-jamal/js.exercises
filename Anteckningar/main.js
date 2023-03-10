let input = document.querySelector("input");

let i = 0
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        window.localStorage.setItem(i++, input.value);
        note()

        // clear input
        input.value = "";
    }
})

function note() {
    const note = document.querySelector("ul")
    const message = document.createElement("li")
    let txt = window.localStorage.getItem(1, 2);
    console.log(i)
    message.innerText = txt
    note.appendChild(message)
}

//new Date(data.key).toLocaleDateString("fi-FI") + ": " + data.val();

note()