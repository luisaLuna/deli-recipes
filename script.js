// Below is the code for make the nav bar responsive:
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Below is the code to make the navbar appear and disappear when scrolling:
const nav = document.querySelector('.navbar')
let lastScrollTop = 0; 
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
       nav.classList.add('active')
    } else {
        nav.classList.remove('active')
     }
      
    lastScrollTop = scrollTop; 
})
// Here finishes the code for the nav bar.

// Below is the code for the animation on the h1 text: 
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Explore the most delicious recipes!';
let idx = 1
let speed = 300 / 3

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = text.length;
    }

    setTimeout(writeText, speed)
}
// Here finishes the code for the animation on the h1 text.

// Below is the code for the card recipes:

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Food"> ';
    title.innerHTML = 'This is a deli recipe';
    excerpt.innerHTML = ' This is the info of the recipe.';
    name.innerHTML = 'Calories 100'; 
    date.innerHTML = 'Time 20-min'; 

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}