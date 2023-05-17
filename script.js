var button = document.getElementById("vibe");

button.addEventListener("touchstart", () => {
    navigator.vibrate(1000);
    console.log("Start")
})

button.addEventListener("touchend", () => {
    navigator.vibrate(0);
    console.log("end");
})