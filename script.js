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