const spazio = document.getElementById("timer");
const bottoneStart = document.getElementById("buttonStart");
const bottoneStop = document.getElementById("buttonStop");
let secondi = 0;
let timer = null;
bottoneStart.addEventListener("click", function () {
  timer = setInterval(() => {
    secondi++;
    spazio.textContent = secondi;
    sessionStorage.setItem("tempo", secondi);
  }, 1000);
});
bottoneStop.addEventListener("click", function () {
  clearInterval(timer);
});
if (secondi !== 0) {
  secondi = sessionStorage.getItem(secondi);
}
