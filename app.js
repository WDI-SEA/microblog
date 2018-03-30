let entriesArr = [];
let storedPosts;
var list;
// let closeButtonsArr = [];

const setLocalStorage = (entriesArr) => {
   console.log("Setting localStorage with array:",entriesArr);
   console.log("localStorage - before: ",storedPosts);
   localStorage.setItem('storedPosts', JSON.stringify(entriesArr));
   console.log("localStorage - after: ",storedPosts);
}

const deleteEntry = function(e) {
   let clickedCloseButton = this.parentElement;
   list.removeChild(clickedCloseButton);
}

const updateEntries = function(e) {
   e.preventDefault();
   
   let latestEntry = document.getElementsByTagName('input')[0];
   let latestEntryText = latestEntry.value;
   entriesArr.unshift(latestEntryText);
   
   let newListEntry = document.createElement('li');
   newListEntry.innerHTML = entriesArr[0] + "<span class='remove-item'>x</span>";
   
   list = document.getElementById('entry-list');
   list.insertBefore(newListEntry,list.childNodes[0]);
   document.getElementById('entry-form').reset();
   
   setLocalStorage(entriesArr);

   let closeButtonsArr = document.getElementsByClassName('remove-item');
   for (let i = 0; i < closeButtonsArr.length; i++) {
      closeButtonsArr[i].addEventListener('click',deleteEntry);
   }
}

const getLocalStorage = () => {
   let savedPostsStr = localStorage.getItem('storedPosts');
   console.log(savedPostsStr);
   if (savedPostsStr !== null) {
      entriesArr = JSON.parse(savedPostsStr);

      list = document.getElementById('entry-list');
      
      entriesArr.forEach( (item, index) => {
         let newListEntry = document.createElement('li');
         newListEntry.innerHTML = item + "<span class='remove-item'>x</span>";
         list.appendChild(newListEntry);
      });
   };
}

getLocalStorage();
document.getElementById('submit-button').addEventListener('click',updateEntries);