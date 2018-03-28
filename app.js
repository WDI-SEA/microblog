const postForm = document.getElementById("post-form");
	postForm.addEventListener("submit", function(e){
		e.preventDefault();
		let postInput = document.getElementById("post-input").value;
		console.log(postInput);

		let newPost = document.createElement("li");
		newPost.innerHTML = postInput;
		console.log(newPost);
 		let posted = document.getElementById("postedHtml");
		posted.appendChild(newPost);
	})



