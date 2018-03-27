const submitForm = document.getElementById("submit-form");
let posts = [];
let post1 = document.getElementById('post0')
let post2 = document.getElementById('post1')
let post3 = document.getElementById('post2')
let post4 = document.getElementById('post3')


submitForm.addEventListener("submit", function(e){
    e.preventDefault();
    const blogPost = document.getElementById('input-box').value;
    console.log(blogPost);
    // let post = document.getElementById('post');
    // post.innerHTML = blogPost
    posts.unshift(blogPost)
    console.log(posts)
    post1.innerHTML = posts[0]
    post2.innerHTML = posts[1]
    post3.innerHTML = posts[2]
    post4.innerHTML = posts[3]
  });

