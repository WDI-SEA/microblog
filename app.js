const submitForm = document.getElementById("submit-form");
let posts = [];
 
submitForm.addEventListener("submit", function(e){
    e.preventDefault();
    const blogPost = document.getElementById('input-box').value;
    console.log(blogPost);
    // let post = document.getElementById('post');
    // post.innerHTML = blogPost
    posts.unshift(blogPost)
    console.log(posts)
  });



