console.log("hello");

var timedisplay;

function pad(s, c) {
    return (("0").repeat(c) + s).slice(-c);
}

function refresh() {
    var d = new Date();
    timedisplay.innerHTML =
    `${pad(d.getUTCHours(), 2)} :
    ${pad(d.getUTCMinutes(), 2)} :
    ${pad(d.getUTCSeconds(), 2)} UTC`;
};

window.onload = function() {
    timedisplay = document.getElementById("clock");
    window.setInterval(
        refresh,
        1000
    );
    refresh();
};
