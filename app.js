const postForm = document.getElementById("post-form");
let things = []

const insertOneElement = (postInput) => {
	let newPost = document.createElement("li");
			newPost.innerHTML = postInput.value;
			console.log(newPost);
			document.getElementById("postedHtml").appendChild(newPost);

}

const populateOnRefresh = (temp) => {
		for(let i = 0; i < temp.length; i++) {
			let newPost = document.createElement("li");
			newPost.innerHTML = temp[i];
			console.log(newPost);
			document.getElementById("postedHtml").appendChild(newPost);

		};
};

postForm.addEventListener("submit", function(e){
	e.preventDefault();
	let postInput = document.getElementById("post-input");
	console.log(postInput);

	//consider making line 10-14 a function that can be called later when adding things to li
	//so what I should have is a function with a string perameter(postInput.value(which would be a string by nature))
	
	addToLocalStorage(postInput.value);
	insertOneElement(postInput);
	postInput.value = "";
});



//for local storage, I want to make an empty array. make 

const addToLocalStorage = (item) => {
	things.push(item)
	localStorage.setItem("lSThings", JSON.stringify(things));
//stuff stored in localStorage will always be a string or eeven a fake string ie "[ "example"]"
//so we have to convert our strings that we got from the event listener an convert into fake array
	console.log("adding to storage");
//will add one thing to local storage by adding it local array (things)

}
//get from local storage and add to array
const getFromLocalStorage = () => {
	console.log("getting from local storage");
	things = JSON.parse(localStorage.getItem("lSThings")) || [];
	// for(let i = 0; i < things.length; i++) {
	// 	let newPost = document.createElement("li");
	// 	newPost.innerHTML = postInput[i];
	// 	console.log(newPost);
	// 	postedHtml.appendChild(newPost);
	// };
//we parse to turn the fake string back into a real array because, again, we can only store strings in localStorage
	console.log(things, typeof things);

	//make items from things array
	populateOnRefresh(things);
};

getFromLocalStorage();



// const populateOnRefresh = (temp) => {
// 	let newPost = document.createElement("li");
// 		newPost.innerHTML = postInput.value;
// 		console.log(newPost);
// 		document.getElementById("postedHtml").appendChild(newPost);
// };

// populateOnRefresh(things);

// const decapitateMyChild = () => {
// 	while(things[0])
// 		things.removechild;
// };

// decapitateMyChild();


















