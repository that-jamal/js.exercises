let sec = 10;

function nu() {
    document.getElementById("sec").innerText = sec
    if (sec >= 1) {
        sec = sec - 1
        console.log(sec);
    } else {
        sec = 0
    }

}

var intervalId = window.setInterval(function () {
    // call your function here
    nu()
}, 1000);
