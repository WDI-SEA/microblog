let entriesArr = [];
var list;
// let closeButtonsArr = [];

const deleteEntry = function(e) {
   let clickedCloseButton = this.parentElement;
   console.log(clickedCloseButton);
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
   
   let closeButtonsArr = document.getElementsByClassName('remove-item');
   console.log(closeButtonsArr);
   for (let i = 0; i < closeButtonsArr.length; i++) {
      closeButtonsArr[i].addEventListener('click',deleteEntry);
   }
}

document.getElementById('submit-button').addEventListener('click',updateEntries);