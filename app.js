const userSubmit = document.getElementById("submitButton");
const userDelete = document.getElementById("deleteButton");
const form = document.getElementById("myForm");
const list = document.getElementById("postList");
let postCount = document.getElementById("postsAmount");
let userInputArr = [];

userSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	let userInput = document.getElementById("inputMessage").value;
	if (userInput) {
		let addList = document.createElement("li");
		addList.classList.add("messageBubble");
		addList.innerHTML = userInput;
		list.appendChild(addList);
		userInputArr.push(userInput);
		postsAmount.innerHTML++;
	}
	form.reset();
})

userDelete.addEventListener("click", (e) => {
	e.preventDefault();
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
	userInputArr = [];
	postsAmount.innerHTML = 0;
})

