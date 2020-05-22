"use strict";

let searchName;

const
    searchMessage = 'type a name, my dear...',
    pokeContainer = document.getElementById('pokeContainer'),
    numberOfPokemon = 800,
    colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    },
    mainTypes = Object.keys(colors),
    fetchPokemon = async (name = undefined) => {
        for (let i = 1; i <= numberOfPokemon; i++) {
            await getPokemon(i, name);
        }
    },
    getPokemon = async (id, name) => {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`,
            res = await fetch(url),
            pokemon = await res.json();

        createPokemonCard(pokemon, name);

    },
    createPokemonCard = (pokemon, name) =>  {

        console.log(`name: ${name} poke name: ${pokemon.name}`);

        console.log(`here`);

        let pokemonEl = document.createElement('div');

        pokemonEl.classList.add('pokemon');

        let pokeTypes = pokemon.types.map(type => type.type.name),
            type = mainTypes.find(type => pokeTypes.indexOf(type) > -1),
            displayName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

        pokemonEl.style.backgroundColor = colors[type];

        pokemonEl.innerHTML = `
        
                <div class="img-container">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${displayName}" />
                </div>
                <div class="info">
                    <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
                    <h3 class="name">${displayName}</h3>
                    <small class="type">Type: <span>${type}</span></small>
                </div>
                
            `;
        pokeContainer.appendChild(pokemonEl);

    },
    getData = () => {
        $("#pokeContainer").empty();
        if (searchName === undefined) {
            console.log('no search name');
            fetchPokemon();
        } else {
            console.log(`getData: ${searchName}`);
            fetchPokemon(searchName)
                .then(searchName => searchName);
        }
    };


/*fetchPokemon()
    .then(r => r);

 */

getData();

$(".searchButton").click(function () {
    //fetchPokemon().then(r => r);
    //console.log(`search clicked`);
    $(this).toggleClass("bg-green");
    $(".fas").toggleClass("color-white");
    $("#input").focus().toggleClass("active-width").val(`${searchMessage}`);
});








