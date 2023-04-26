let button = document.querySelector("button");
let bax = document.querySelector("div")

async function fetchData() {
    let url = 'http://10.111.3.78:3000/api/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
button.addEventListener("click", async function () {
    let data = await fetchData(); // får ut datan ur fatch data
    console.log(data)
    let html = '';
    data.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.name}</h2>
                            <p><strong>age: ${user.age}</strong></p>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });
    bax.innerHTML = html;
})