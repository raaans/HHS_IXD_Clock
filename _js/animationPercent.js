var sun = document.getElementById('sun');
var container = document.getElementById('animPercent'),
    totalcurren

var showPercent = window.setInterval(function () {
    if (currentPercent < 100) {
        currentPercent += 1;
    } else {
        currentPercent = 0;
    }
    // Updates a div that displays the current percent
    container.innerHTML = currentPercent;
}, 60);
