var button = document.getElementById("vibe");
var play = document.getElementById("play");
var downTime = 0;
var upTime = 0;
var pattern = [];

button.addEventListener("touchstart", () => {
    navigator.vibrate(2000);
    downTime = new Date().getTime();

    var timeDifference = downTime - upTime;
    if (downTime == 0 || upTime == 0) {
        timeDifference = 0;
    }
    else {
        pattern.push(timeDifference);
    }
    console.log("Start")
    console.log(`Waited for ${timeDifference}ms`);
})

button.addEventListener("touchend", () => {
    navigator.vibrate(0);

    upTime = new Date().getTime();
    var timeDifference = upTime - downTime;
    pattern.push(timeDifference);
    console.log("end");
    console.log(`Button held down for ${timeDifference}ms`);
    console.log(pattern);
})

play.addEventListener("click", () => {
    navigator.vibrate(pattern);
    console.log("Playing");
})