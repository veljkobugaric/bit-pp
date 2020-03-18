var $body = document.querySelector('body');
var $container = document.querySelector('.container');

function renderCoctail(coctailName, photoCoctail){
    $container.innerHTML = "";
   
    var $title = document.createElement('p');
    $title.textContent = coctailName;
    $container.appendChild($title);
    
    var $image = document.createElement('img');
    $image.setAttribute('src', photoCoctail);
    $container.appendChild($image);
}

function loadCoctail() {
    var req = new XMLHttpRequest();
    req.open('GET','https://www.thecocktaildb.com/api/json/v1/1/random.php');
    req.send();
  
    req.addEventListener('load', function () {
        var data = JSON.parse(req.responseText);
        var coctailData = data.drinks[0]; 
     
        renderCoctail(coctailData.strDrink, coctailData.strDrinkThumb); 
    });
}

var button = document.querySelector('button');
button.addEventListener('click', loadCoctail);





