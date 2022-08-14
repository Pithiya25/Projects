const h = document.querySelector("#hour");
const m = document.querySelector("#min");
const s = document.querySelector("#sec");
const ampmE1 = document.querySelector("#ampm");


function updateClock() {
  let hrs = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hrs > 12) {
    hrs = hrs - 12;
    ampm = "PM";
  }

  hrs = hrs < 10 ? "0 " + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  h.innerText = hrs;
  m.innerText = min;
  s.innerText = sec;
  ampmE1.innerText = ampm;

  setTimeout(()=>{
    updateClock();
  },1000)
}

updateClock();
