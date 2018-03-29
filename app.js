const btn = document.querySelector('#post');
const input = document.querySelector('input')
const newLi = document.querySelector('#todoList')
const card = document.querySelector('.chip')
const trashCan = document.querySelector('i')

let post = []

const handleChange = (e) => {
    const newTodo = e.target.value;
    const newItem = document.createElement('li')
    newItem.innerHTML = newTodo
    newLi.appendChild(newItem)
    
}

const handleHover = (e) => {
    trashCan.classList.toggle('fa')
    trashCan.classList.toggle('fa-trash')
  e.preventDefault();
    
    
}

const handleDelete = () => {
    console.log('delete me')
}

const handleCompleted = () => {
    newLi.classList.toggle('completed')
}


trashCan.addEventListener('click', handleDelete)
card.addEventListener('mouseover', handleHover)
input.addEventListener('change', handleChange)
newLi.addEventListener('click', handleCompleted)