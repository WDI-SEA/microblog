const userSubmit = document.getElementById("submitButton");
const list = document.getElementById("postList");
let userInputArr = [];

userSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	let userInput = document.getElementById("inputMessage").value;
	let addList = document.createElement("li");
	addList.classList.add("messageBubble");
	addList.innerHTML = userInput;
	list.appendChild(addList);
	userInputArr.push(userInput);
	userInput = null;
	console.log(userInputArr);
})

