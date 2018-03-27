const blogEntryForm = document.getElementById("blogEntryForm");
const blogHome = document.getElementById("blogHome");
const blogArr = ['fake blog post1','fake blog post2'];

function popFunc() {
	for (let x of blogArr){
		let newLi = document.createElement('LI');
		newLi.innerHTML = x;
		document.getElementById('blogHome').appendChild(newLi);
	}
}

popFunc();

blogEntryForm.addEventListener("submit", function(e){
	e.preventDefault();
	let newBlogEntry = document.getElementById("blogEntryField").value;
	let newLi = document.createElement('LI');
	newLi.innerHTML = newBlogEntry;
	blogArr.push(newLi);
	document.getElementById('blogHome').appendChild(newLi);
})


//add to the list directly into the HTML
// 	let newBlogEntry = document.getElementById("blogEntryField").value;
// 	let newContent = document.createTextNode(newBlogEntry);
// 	let newLi = document.createElement('LI');
// 	newLi.appendChild(newContent);
// 	document.getElementById("blogHome").appendChild(newLi);
// });

