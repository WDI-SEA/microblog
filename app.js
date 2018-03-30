let entriesArr = [];
let storedPosts;
var list;
// let closeButtonsArr = [];

const setLocalStorage = (entriesArr) => {
   localStorage.setItem('storedPosts', JSON.stringify(entriesArr));
}

const deleteEntry = function(e) {
   let clickedCloseButton = this.parentElement;
   let arrayItemToRemove = this.parentElement.id;
   list.removeChild(clickedCloseButton);
   console.log("Entries array before removal: ",entriesArr);
   entriesArr.splice(entriesArr.length-arrayItemToRemove-1,1);
   console.log("Entries array after removal: ",entriesArr);
   setLocalStorage(entriesArr);
}

const listenForEntryDeletions = () => {
   let closeButtonsArr = document.getElementsByClassName('remove-item');
   for (let i = 0; i < closeButtonsArr.length; i++) {
      closeButtonsArr[i].addEventListener('click',deleteEntry);
   }
}

const updateEntries = function(e) {
   e.preventDefault();
   
   let latestEntry = document.getElementsByTagName('input')[0];
   let latestEntryText = latestEntry.value;
   entriesArr.unshift(latestEntryText);
   
   let newListEntry = document.createElement('li');
   newListEntry.setAttribute('id',entriesArr.length-1);
   newListEntry.innerHTML = entriesArr[0] + "<span class='remove-item'>x</span>";
   
   list = document.getElementById('entry-list');
   list.insertBefore(newListEntry,list.childNodes[0]);
   document.getElementById('entry-form').reset();
   
   setLocalStorage(entriesArr);

   listenForEntryDeletions();
}

const getLocalStorage = () => {
   let savedPostsStr = localStorage.getItem('storedPosts');
   console.log(savedPostsStr);
   if (savedPostsStr !== null) {
      entriesArr = JSON.parse(savedPostsStr);

      list = document.getElementById('entry-list');
      
      entriesArr.forEach( (item, index) => {
         let newListEntry = document.createElement('li');
         newListEntry.setAttribute('id',entriesArr.length-1-index);
         newListEntry.innerHTML = item + "<span class='remove-item'>x</span>";
         list.appendChild(newListEntry);
      });
   };
}

getLocalStorage();
listenForEntryDeletions();
document.getElementById('submit-button').addEventListener('click',updateEntries);