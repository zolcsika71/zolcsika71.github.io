"use strict";

class ResponseError  {
    constructor(message) {
        this.display = message;
    }
    console (message) {
        console.log(`${this.display}`);
    }
}

class HttpError {
    constructor(message) {
        this.display = message;
    }
    console (message) {
        console.log(`${this.display}`);
    }
}

class NetworkError {
    constructor(message) {
        this.display = message;
    }
    console (message) {
        console.log(`${this.display}`);
    }
}

class NotFoundError {
    constructor(message) {
        this.display = message;
    }
    console (message) {
        console.log(`${this.display}`);
    }
}

const

    get = function (url) {
        return fetch(url)
            .then(response => {

                if (response.ok) {
                    const contentType = response.headers.get('Content-Type') || '';

                    if (contentType.includes('application/json')) {
                        return response.json().catch(error => {
                            return Promise.reject(new ResponseError('Invalid JSON: ' + error.message));
                        });
                    }

                    if (contentType.includes('text/html')) {
                        return response.text().then(html => {
                            return {
                                page_type: 'generic',
                                html: html
                            };
                        }).catch(error => {
                            return Promise.reject(new ResponseError('HTML error: ' + error.message));
                        })
                    }

                    return Promise.reject(new ResponseError('Invalid content type: ' + contentType));
                }

                if (response.status === 404) {
                    return Promise.reject(new NotFoundError('Page not found: ' + url));
                }

            return Promise.reject(new HttpError('HTTP error: ' + response.status));
        }).catch(error => {
            return Promise.reject(new NetworkError(error.message));
        });
    },
    // TODO onerror -> if picture not found run standby();
    standby = ()  => {
        document.getElementById('photo').src = './img/aMan.jpg';
    },
    fetchData = () => {

        let setPokemonArray = (pokemonCount => {


            let pokemonArray = [],
                pushData = (data => {
                    if (data.ok)
                        pokemonArray.push(data);

            });

            for (let i = 1; i <= pokemonCount; i++) {
                url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                fetch(url)
                    .then((data) => data.json())
                    .then((data) => pushData(data));

            }
            console.log(pokemonArray);

        });

        let url = `https://pokeapi.co/api/v2/pokemon/1`;

        return get(url)
            .then((r) => r)





    },
    generateHtml = (pokemon => {

        console.log(pokemon);

        $('.name').html(pokemon.name);
        $('#photo').attr('src', pokemon.sprites.front_default).css('align-items', 'center');

        $('.details').html(`
            <span>Height: ${pokemon.height}</span>
            <span>Weight: ${pokemon.weight}</span>
        `);
        $('.developer').html(`
            <span># ${pokemon.id}</span>
        `);
    });


let data = fetchData();

console.log(data);

$('#right').click(() => {

})

$('#left').click(() => {

})










