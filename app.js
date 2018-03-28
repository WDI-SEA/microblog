const updateEntries = () => {
   console.log('hello');
   let entryList = document.getElementsByTagName('ul');
   console.log(entrylist);
}

document.getElementById('submit-button').addEventListener('click',updateEntries);