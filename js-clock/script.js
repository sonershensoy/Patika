let myName = prompt("Please enter your name:");
let info = document.querySelector("#myName");
info.innerHTML = `${myName}`;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = weekday[date.getDay()];
  let session = "AM";
  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hour + ":" + min + ":" + sec + " " + session + " " + day;
  document.querySelector("#myClock").innerText = time;
  setTimeout(showTime, 100);
}

showTime();
