function coctail() {
    const request = new XMLHttpRequest;
    request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php');
    request.send();


    request.addEventListener(, function call() {
        const request = JSON.parse(request.responseText);

    }
}

const button = document.querySelector('button');
button.addEventListener('click', coctail);
