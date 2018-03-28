console.log("sanity check");

const blogPost = ["Blog One", "Blog two", "Blog Three"]



const addPost = function () {
	let getInput = document.getElementById("type").value;
	console.log(getInput);
	let newItem = document.createElement('li');
	console.log(newItem);
	newItem.innerHTML = getInput;
	document.getElementById("list").appendChild(newItem);

}


document.getElementById("Post").addEventListener("click", addPost);


