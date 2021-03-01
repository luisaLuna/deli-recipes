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

// Below is the code for the API:

const API_URL_VEG = 'https://api.spoonacular.com/recipes/random?apiKey=fdb84c6009cf4bd5b9314e9ee9c623f2&number=21&tags=vegetarian';


const cardsContainer = document.getElementById('cards-container');

getRecipes(API_URL_VEG)

async function getRecipes(url) {
    try { 
        const res = await axios(API_URL_VEG);
        
        createRecipeCard(res.data.recipes)

    } catch(err) {
        console.log(err);
    }
    
}

function createRecipeCard(recipes) {
    recipes.forEach((recipe) => {
        const { title, image, readyInMinutes, diets, spoonacularSourceUrl } = recipe 

        const card = document.createElement('div');
        card.classList.add('card','mexican');

        card.innerHTML = `
    <div class="card-header" id="header">
    <img src="${image}" alt="${title}">
    </div>
    <div class="card-content">
        <h3 class="card-title mexican" id="title">
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