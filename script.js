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

// Below is the code for the API:

const APIURL = 'https://api.spoonacular.com/recipes/random?apiKey=fdb84c6009cf4bd5b9314e9ee9c623f2&number=1';

const cardsContainer = document.getElementById('cards-container');

getRecipes(APIURL)

async function getRecipes(url) {
    try { 
        const res = await axios(url);
        
        createRecipeCard(res.data.recipes)

    } catch(err) {
        console.log(err);
    }
    
}

function createRecipeCard(recipes) {
    recipes.forEach((recipe) => {
        const { title, image, summary, readyInMinutes, diets, spoonacularSourceUrl } = recipe 

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
    <div class="card-header" id="header">
    <img src="${image}" alt="${title}">
    </div>
    <div class="card-content">
        <h3 class="card-title" id="title">
        ${title}
        </h3>
        <p class="card-excerpt" id="excerpt">
        ${diets}
        </p>
        <div class="info">
        <small id="date">Time: ${readyInMinutes} Minutes</small>
        </div>
    </div>
    <div id="btn-container">
    <a href="${spoonacularSourceUrl}" target="_blank" id="btn-recipe">View Recipe</a>
    </div>
    `
        cardsContainer.append(card);
    })
}

const API_URL_MEX = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fdb84c6009cf4bd5b9314e9ee9c623f2&number=1&cuisine=mexican'






// Here finishes the code for displaying random recipes on the cards




// Below is the code to search and display recipes: 

// const SEARCH_API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fdb84c6009cf4bd5b9314e9ee9c623f2&number=1&query='

// const form = document.getElementById('form');
// const search = document.getElementById('search');
// let searchTerm = "";

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     searchTerm = search.value;
    

//     if(searchTerm && searchTerm !== '') {
//         getRecipes(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })
