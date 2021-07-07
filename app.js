const userSubmit = document.getElementById("submitButton");
const userDelete = document.getElementById("deleteButton");
const form = document.getElementById("myForm");
const list = document.getElementById("postList");
let postCountElement = document.getElementById("postsAmount");
let postCount = 0;
if (localStorage.getItem("postCount")){
	postCount = JSON.parse(localStorage.getItem("postCount"));
}
let userInputArr = [];
if (localStorage.getItem("postList")){
	userInputArr = JSON.parse(localStorage.getItem("postList"));
}

userSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	let userInput = document.getElementById("inputMessage").value;
	if (userInput) {
		postCount++;
		postCountElement.innerHTML = postCount;
		while(list.firstChild){
			list.removeChild(list.firstChild);
		}
		userInputArr.unshift(userInput);
		userInputArr.forEach(item => {
			let addList = document.createElement("li");
			addList.classList.add("messageBubble");
			addList.innerHTML = item;
			list.appendChild(addList);
		})
	}
	form.reset();
	localStorage.setItem("postList", JSON.stringify(userInputArr));
	localStorage.setItem("postCount", JSON.stringify(postCount));
})

userDelete.addEventListener("click", (e) => {
	e.preventDefault();
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
	userInputArr = [];
	localStorage.setItem("postList", JSON.stringify(userInputArr));
	postCount = 0;
	localStorage.setItem("postCount", JSON.stringify(postCount));
	postCountElement.innerHTML = postCount;
})

const populateList = () => {
	if (userInputArr.length) {
		postCountElement.innerHTML = postCount;
		userInputArr.forEach(item => {
			let addList = document.createElement("li");
			addList.classList.add("messageBubble");
			addList.innerHTML = item;
			list.appendChild(addList);
		})
	}
}

populateList();