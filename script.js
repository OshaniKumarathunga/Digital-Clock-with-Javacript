const hourElement = document.getElementById("hours");
const minituesElement = document.getElementById("minitues");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function digitalclock() {
    let hour = new Date().getHours();
    let minitue = new Date().getMinutes();
    let second = new Date().getSeconds();
    let am = "AM";

    if (hour > 12) {
        hour = hour - 12;
        am = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minitue = minitue < 10 ? "0" + minitue : minitue;
    second = second < 10 ? "0" + second : second;

    hourElement.innerText = hour;
    minituesElement.innerText = minitue;
    secondsElement.innerText = second;
    ampmElement.innerText = am;

    //from this it run every second
    setTimeout(() => {
        digitalclock();
    }, 1000);

}

digitalclock();