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

const API_URL_DESSERT = 'https://api.spoonacular.com/recipes/random?apiKey=2467e20a349e4da1a996db77043636d6&number=1&tags=dessert';


const cardsContainer = document.getElementById('cards-container');

getRecipes(API_URL_DESSERT)

async function getRecipes(url) {
    try { 
        const res = await axios(API_URL_DESSERT);
        
        createRecipeCard(res.data.results)

    } catch(err) {
        console.log(err);
    }
    
}

function createRecipeCard(results) {
    results.forEach((result) => {
        const { title, image, readyInMinutes, diets, spoonacularSourceUrl } = result 

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