import {getExistingFavs} from"./utils/favFunctions.js";

const favourite = getExistingFavs();

const  articlesContainer = document.querySelector(".container");

if (favourite.length === 0) {
  articlesContainer.innerHTML =" No Favourites Added Yet";
}

favourite.forEach((favourites) => {
  articlesContainer.innerHTML += `<div class="article" 
  
                                    <h4>Title: ${favourites.title}</h4>
                                    <h5>Author: ${favourites.author}</h5>
                                    <i class="fa fa-heart"></i>
  
                                  </div>`
});