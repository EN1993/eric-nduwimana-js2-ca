import {getExistingFavs} from"./utils/favFunctions.js";
const articlesContainer = document.querySelector(".container");
const search = document.querySelector(".search");



const favourite = getExistingFavs();

const url="http://localhost:1337/articles";



async function productsItem() {
  const response= await fetch(url);
  const article = await response.json();
  
  articlesContainer.innerHTML ="";
    article.forEach(function (item) {

      let cssClass="far";
  
      const doesObjectExist = favourite.find(function (fav) {
        console.log(fav);
        return parseInt(fav.id) === item.id;
      });
  
      console.log(doesObjectExist);
  
      if (doesObjectExist) {
        cssClass="fa";
      }
  
  
      articlesContainer.innerHTML += `<div class="article">
      
                                        <h4>Title: ${item.title}</4>
                                        <h5>Author: ${item.author}</h5>
                                        <i class="${cssClass} fa-heart" data-id="${item.id}" data-title="${item.title}" data-author="${item.author}"></i>
      
      </div>`;
  });
  
  
  
  


const favButtons = document.querySelectorAll(".article i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const author = this.dataset.author;
    
    const currentFavs = getExistingFavs();

    const itemExists= currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (itemExists === undefined) {
      const item = { id: id, title: title, author: author };
      currentFavs.push(item);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id != id);
      saveFavs(newFavs);
    }


 }


 function saveFavs(favs) {
   localStorage.setItem("favourite", JSON.stringify(favs));
 }
 
 
}

productsItem();