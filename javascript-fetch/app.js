let button = document.querySelector("button");
let bax = document.querySelector("div")
/*
async function fetchData() {
    let url = 'http://10.111.3.78:3000/api/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}*/

async function fetchData() {
    fetch('http://10.111.3.78:3000/api/users')
        .then(res => res.json())
        .then((data) => console.log(data))
}
let data
button.addEventListener("click", async function () {
    console.log(data)
    let user = await fetchData(); // får ut datan ur fatch data
    console.log(user)
    let html = '';
    user.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.name}</h2>
                            <p><strong>age: ${user.age}</strong></p>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });
    bax.innerHTML = html;
})
