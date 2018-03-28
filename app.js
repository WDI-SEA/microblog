let entriesArr = [];

const updateEntries = function(e) {
   e.preventDefault();
   
   let latestEntry = document.getElementsByTagName('input')[0];
   let latestEntryText = latestEntry.value;
   entriesArr.unshift(latestEntryText);
   
   let newListEntry = document.createElement('li');
   newListEntry.innerHTML = entriesArr[0];
   
   let list = document.getElementById('entry-list');
   list.insertBefore(newListEntry,list.childNodes[0]);
   document.getElementById('entry-form').reset();
}

document.getElementById('submit-button').addEventListener('click',updateEntries);