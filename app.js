// https://api.adviceslip.com/advice//
// https://api.adviceslip.com///
const genButton = document.querySelector(".button");
genButton.addEventListener("click", generate);
const adviceNum = document.querySelector(".advice-num");
const advice = document.querySelector("h1");
const loader = document.querySelector(".loader");
// event listener when load//
// window.addEventListener("DOMContentLoaded", () => {
//   generate();
// });

// api calling//
function generate() {
  loader.classList.remove("hidden");
  new Audio("generate.mp3").play();
  const url = "https://api.adviceslip.com/advice";
  setTimeout(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      display(data);
    })
    .catch((err) => {
      alert(err)
    });
  },800)
  
}
// displaying to the dom the Datas//
function display(data) {
  adviceNum.innerText = data.slip.id;
  advice.innerText = `“${data.slip.advice}”`;
}
