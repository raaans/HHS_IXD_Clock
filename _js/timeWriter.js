function writeTime() {

    //get current time
    var currentTime = new Date();

    //create vars because writing takes effort
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();

    //call addZero function for make nice
    h = addZero(h);
    m = addZero(m);

    //write current time into span#currentGMT
    document.getElementById('currentGMT').innerHTML = h + ":" + m;

    //refreshes writeTime function every 5s
    var t = setInterval(writeTime, 5000);
}

//add a zero in front of single-digit numbers
function addZero(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

function dayLight() {
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");
    var sky = document.getElementById("sky");
    var earth = document.getElementById("earth");

    //get current time
    var currentTime = new Date();
    var h = currentTime.getHours();

    if (h > 8 && h < 20) {
        sun.classList.add('sunActive');
        moon.classList.remove('moonActive');
        sky.classList.remove("nightSky");
        earth.classList.remove("nightEarth");

    } else {
        sun.classList.remove('sunActive');
        moon.classList.add('moonActive');
        sky.classList.add("nightSky");
        earth.classList.add("nightEarth");
    };

    //refreshes dayLight function every 5s
    var t = setInterval(dayLight, 5000);
}
