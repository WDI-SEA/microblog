const updateEntries = function(e) {
   e.preventDefault();
   
   let latestEntry = document.getElementsByTagName('input')[0];
   let latestEntryText = latestEntry.value;
   
   let newListEntry = document.createElement('li');
   newListEntry.innerHTML = latestEntryText;
   document.getElementById('entry-list').appendChild(newListEntry);
}

document.getElementById('submit-button').addEventListener('click',updateEntries);