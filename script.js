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

const APIURL = 'https://api.spoonacular.com/recipes/random?apiKey=fdb84c6009cf4bd5b9314e9ee9c623f2&number=9';

const cardsContainer = document.getElementById('cards-container');

getRecipes(APIURL)

// First, we create our async function to get the data from our API:
async function getRecipes(url) {

    // We use try/catch to handle errors: 
    try {  
        // We use the the below code to GET the data with axios from the API: 
        const res = await axios(url);
        
        // With the data that we received, we are going to call another function that will add that data to the html body:
        createRecipeCard(res.data.recipes)

    } catch (err) {
        //  If there is an error with our API, we will console.log the error 
        console.log(err);
    }
    
}

// This is the second function which adds the data from the API to our 'divs' that display the cards:
function createRecipeCard(recipes) { 

    // We use a forEach() method that executes a function once for each array element: 
    recipes.forEach((recipe) => {
        const { title, image, summary, readyInMinutes, diets, spoonacularSourceUrl } = recipe 

        // We create a div that will containt the data: 
        const card = document.createElement('div');

        // We add it a class:
        card.classList.add('card');

 // We insert the data to its html, we use backticks and ${} to insert for example the "image" that we got from the API
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
        // We append the divs that we are creating to the container 
        cardsContainer.append(card);
    })
}

// Now, after we call the function "getRecipes(APIURL)", we will have the information from the API displaying on our page. 

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
