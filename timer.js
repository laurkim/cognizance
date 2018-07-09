function timer() {
  let timeDiv = document.getElementsByClassName("timer-count");
  let time = timeDiv[0].innerText;
  time = "00:59";
  timeDiv[0].innerText = time;
  let seconds = parseInt(time.split(":")[1]);
  let timer = setInterval(function() {
    checkGameStatus();
    let timeDiv = document.getElementsByClassName("timer-count");
    if (seconds === 0) {
      console.log("timer is over");
      clearInterval(timer);
    } else if (seconds > 10) {
      console.log("timer is not zero");
      --seconds;
      timeDiv[0].innerText = `00:${seconds}`;
    } else {
      console.log("timer is less than 10");
      --seconds;
      timeDiv[0].innerText = `00:0${seconds}`;
    }
  }, 1000);
}
