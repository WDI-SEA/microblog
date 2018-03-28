const btn = document.querySelector('#post');
const input = document.querySelector('input')

let post = []

const handleChange = (e) => {
    console.log(e.target.value)
}

const handleSubmit = (e) => {
    console.log(e.value)
}

input.addEventListener('change', handleChange)
btn.addEventListener('submit', handleSubmit)