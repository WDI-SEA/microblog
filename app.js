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
   
   let latestEntry = {};
   latestEntry.value = $('#entry-text').val();

   if (latestEntry.value !== '') {
      entriesArr.unshift(latestEntry);
      
      let newBlogItem = document.createElement('li');
      newBlogItem.innerHTML = latestEntry.value + "<span class='remove-item'>x</span>";

      let blogPostCount = $('#entry-list').children().length;
      if (blogPostCount === 0) {
         $('#entry-list').append(newBlogItem);
      } else {
         $('#entry-list').prepend(newBlogItem);
      }
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
         let newBlogItem = document.createElement('li');
         newBlogItem.innerHTML = item.value + "<span class='remove-item'>x</span>";
         $('#entry-list').append(newBlogItem);
      });
   };
}

getLocalStorage();
listenForEntryDeletions();
$('#submit-button').click(updateEntries);