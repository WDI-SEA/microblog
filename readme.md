![General Assembly Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67) Microblog Lab

## Summary

Imagine you want to let people write really short public blog posts. The homepage of your microblog app should be a list of these micro-posts with a form to add a new one. We don't have a backend yet, so we won't be worrying about login, users, followers, and all of that good stuff quite yet. The new posts won't even stay on the page when we refresh. But we can create new blog posts, have them added to the page!

Something like this:

![alt tag](https://raw.githubusercontent.com/sf-wdi-22-23/Project-0-Solution/master/screen_shot.png)

Skills:

- Use Git to save your progress
- Use JavaScript to access the DOM
- Use HTML forms to get input from the user
- Style your blog using CSS. Use responsive design!

1. Start by **FORKING** this repository!! 
2. Clone from your fork. You will find files called index.html, style.css, and app.js files.
3. Your HTML page should have a list in it that will display the posts. It can be empty, with JS adding posts, or have some dummy posts in it to start.
4. Your JS will hold an array of posts that it appends to the HTML list.
5. When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.
6. Make frequent commits and pushes. You should commit every time you add a new feature, and it is working! A feature can be something as small as adding a little style.

## Stretch Challenges (optional)

* Save `posts` to [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) or [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
* Sort posts by order created OR alphabetically
* Add comments to posts
* Add a count of how many posts have been posted that updates every time a new post is created.
