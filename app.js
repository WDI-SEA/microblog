console.log("sanity check");

const blogPost = [];

const addPost = function () {
	let getInput = document.getElementById("type").value;
	console.log(getInput);
	let newItem = document.createElement('li');
	console.log(newItem);
	newItem.innerHTML = getInput;
	document.getElementById("list").appendChild(newItem);
	blogPost.push(getInput);
	console.log(blogPost);

}


document.getElementById("Post").addEventListener("click", addPost);


