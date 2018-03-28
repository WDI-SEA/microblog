const blogForm = document.getElementById("blogEntry");
const blogArray = [];
const list = document.getElementById("blogList");

blogForm.addEventListener("submit", function(e){
    e.preventDefault();
let getBlogEntry = document.getElementById("link").value
let newLi = document.createElement("li")

newLi.innerHTML = getBlogEntry;
blogArray.push(newLi);
let lastEntry = (blogArray[blogArray.length-1]);
list.appendChild(lastEntry);
})
