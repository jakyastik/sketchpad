let container = document.querySelector(".container");

let resetBtn = document.createElement("button");
resetBtn.innerText = "Set Grid";

let gridNumber = document.createElement("input");
gridNumber.innerText = "This is it";

let colorLabel = document.createElement("span");
colorLabel.innerText = "Choose a Color";

let getColor = document.createElement("input");
getColor.setAttribute("class", "getColor");
getColor.setAttribute("type", "color");

let gridCount = 0;

document.querySelector(".buttonContainer").appendChild(colorLabel);
document.querySelector(".buttonContainer").appendChild(getColor);
document.querySelector(".buttonContainer").appendChild(gridNumber);
document.querySelector(".buttonContainer").appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
	gridCount = gridNumber.value;
	console.log(gridCount);
});

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
	let div = document.createElement("div");
	div.setAttribute("class", "divBox");

	console.log(getColor.value);
	// event.target.setAttribute("style", "background: #333;");
	event.target.style.backgroundColor = getColor.value;
});
