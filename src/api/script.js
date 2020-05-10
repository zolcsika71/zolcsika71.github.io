"use strict";

let pokeMonId = 1;

const
    apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: pokeMonId
    },
    {url, type, id} = apiData,
    apiUrl = `${url}${type}/${id}`,
    generateHtml = (data) => {
        console.log(data);
        let html = `
            <div class="viewer"
                <div class="name">${data.name}</div>
                <img id="photo">
                <div class="details">
                    <span>Height: ${data.height}</span>
                    <span>Weight: ${data.weight}</span>
                </div>
            </div>
        `
        $('#photo').attr('src', `${data.sprites.front_default}`);
        let pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    };

fetch(apiUrl)
    .then((data) => {
        if (data.ok) {
            return data.json()
        }
        throw new Error('Response not ok.');
    })
    .then(pokemon => generateHtml(pokemon))
    .catch(error => console.error('Error:', error))











