/*
  <script> 
      //saving data locally 
      function save() { 
          var fieldValue = document.getElementById('textfield').value;
          localStorage.setItem('text', fieldValue); 
      }
      //reading data 
      function get() { 
          var storedValue = localStorage.getItem('text'); 
          if (storedValue) { 
              document.getElementById('textfield').value = storedValue; 
          }
      }
      //removing stored data 
      function remove() { 
          document.getElementById( 'textfield').value = ''; 
          localStorage.removeItem('text'); 
      }
  </script>



const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}


// other constant declarations here
let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))



// form event listener here
e.preventDefault()

itemsArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemsArray))


data.forEach(item => {
  liMaker(item)
})


button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})


let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach(item => {
  liMaker(item)
})

button.addEventListener('click', function() {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})
*/