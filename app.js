const list = document.getElementById('addNew');
const postForm = document.getElementById("post-form");
  postForm.addEventListener("submit", function(e){
    e.preventDefault();
    let post = document.getElementById('post').value;
    console.log(post);
    let create = document.createElement("li");
   	create.innerHTML = post;
   	list.appendChild(create);
  });








