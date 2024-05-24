let container = document.querySelector(".container");

let resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";

let div = document.createElement("div");
div.setAttribute("class", "divBox");

createDiv();

function createDiv() {
  for (i = 0; i <= 10000; i++) {
    let container = document.querySelector(".container");
    let div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("class", "divBox");
  }
}

const divBox = document.querySelector("div");
divBox.addEventListener("mouseover", (event) => {
  event.target.setAttribute("style", "background: #333;");
});
