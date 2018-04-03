let entriesArr = [];
let storedPosts;

const setLocalStorage = (entriesArr) => {
   localStorage.setItem('storedPosts', JSON.stringify(entriesArr));
}

const deleteEntry = function(e) {
   let arrayItemToRemove = $('li').index(this.parentElement);
   this.parentElement.remove(arrayItemToRemove);
   entriesArr.splice(arrayItemToRemove,1);
   setLocalStorage(entriesArr);
}

const listenForEntryDeletions = () => {
   //jQuery-ify the code below
   let closedButtonsArr = document.getElementsByClassName('remove-item');
   for (let i = 0; i < closedButtonsArr.length; i++) {
      closedButtonsArr[i].addEventListener("click",deleteEntry);
   }
}

const updateEntries = function(e) {
   e.preventDefault();
   
   let newBlogEntry = {};
   newBlogEntry.value = $('#entry-text').val();

   if (newEntry.value !== '') {
      entriesArr.unshift(newBlogEntry);
      
      let newBlogListItem = document.createElement('li');
      newBlogListItem.innerHTML = newBlogEntry.value + "<span class='remove-item'>x</span>";

      let blogPostCount = $('#entry-list').children().length;
      if (blogPostCount === 0) ? $('#entry-list').append(newBlogListItem) : $('#entry-list').prepend(newBlogListItem);
      
      $('#entry-text').val('');
      
      setLocalStorage(entriesArr);
   };
   listenForEntryDeletions();
}

const getLocalStorage = () => {
   let savedPostsStr = localStorage.getItem('storedPosts');
   if (savedPostsStr !== null) {
      entriesArr = JSON.parse(savedPostsStr);
      
      entriesArr.forEach( (item) => {
         let newBlogListItem = document.createElement('li');
         newBlogListItem.innerHTML = item.value + "<span class='remove-item'>x</span>";
         $('#entry-list').append(newBlogListItem);
      });
   };
}

getLocalStorage();
listenForEntryDeletions();
$('#submit-button').click(updateEntries);