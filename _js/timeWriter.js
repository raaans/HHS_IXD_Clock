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
