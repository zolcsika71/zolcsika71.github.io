"use strict";

let id = 1,
    url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const
    /*
    get = function (url) {
        return fetch(url).then(response => {
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
     */
    // TODO onerror -> if picture not found run standby();
    standby = ()  => {
        document.getElementById('photo').src = './img/aMan.jpg';
    },
    fetchData = (id => {

        console.log(`id: ${id}`);

        url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        fetch(url)
            .then((data) => data.json())
            .then((data) => generateHtml(data))
    }),
    generateHtml = (pokemon => {

        console.log(pokemon);

        $('.name').html(pokemon.name);
        $('#photo').attr('src', pokemon.sprites.front_default).css('align-items', 'center');

        $('.details').html(`
            <span>Height: ${pokemon.height}</span>
            <span>Weight: ${pokemon.weight}</span>
        `);
        $('.developer').html(`
            <span>pokemon id: ${pokemon.id}</span>
        `);
    });


fetchData(id);

$('#right').click(() => {
    if (id < 802) {
        id++;
        fetchData(id);
    } else {
        id = 1;
        fetchData(id);
    }
})

$('#left').click(() => {
    if (id >= 2) {
        id--;
        fetchData(id);
    } else {
        id = 802;
        fetchData(id);
    }
})










