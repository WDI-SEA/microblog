const blogForm = document.getElementById("blogEntry");
let blogArray = [];
let list = document.getElementById("blogList");

$(document).ready(function(){
	getFromLocalStorage();

	blogForm.addEventListener("submit", function(e){
    	e.preventDefault();
    	let valueTypedIn = document.getElementById("link").value
    	blogArray.push(valueTypedIn);
		createListItem(valueTypedIn);
		sendToLocalStorage();
		blogEntry.reset();
	})
});

function createListItem (textToAdd) {	
	let newLi = document.createElement("li");
	newLi.innerHTML = textToAdd;
	newLi.addEventListener('click', function(){
		var index = blogArray.indexOf(this.textContent);
			console.log('index of', this.textContent, 'is', index);
		// splice blogArray to remove the item clicked
		blogArray.splice(index, 1);
			console.log(blogArray);
		// send blogarray to local storage
		sendToLocalStorage();
		// remove list item using this.remove
		this.remove(index);
	})
	list.appendChild(newLi);
}

function sendToLocalStorage () {
	localStorage.setItem('storedBlogs', JSON.stringify(blogArray));
}

function getFromLocalStorage () {
	blogArray = JSON.parse(localStorage.getItem('storedBlogs')) || [];
	console.log('loaded from LS', blogArray);
	blogArray.forEach(function(item){
		createListItem(item);
	});
}
