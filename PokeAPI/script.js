console.log('script online!');

async function getPokemonData(pokeName) {
    // await executes this code and does not run the next line until it is completed.
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();

    return pokeData;
}



async function displayPokemonData1() {

    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value.toLowerCase());
    var pokeDiv = document.querySelector('#pokemonData')
    document.querySelector('#pokemonName').innerText = pokemon.name 
    document.querySelector('.img-wrapper').innerHTML =  `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`
    document.querySelector('#type').innerText = pokemon.types[0].type.name
    document.querySelector('#height').innerText = pokemon.height;
    document.querySelector('#weight').innerText = pokemon.weight;
    document.querySelector('#baseEx').innerText = pokemon.base_experience;
}













// console.log("hello");

// // API (Application Programming Interface)
// // JSON (js object notation)

// var pokeDiv = document.querySelector('#pokemonData');
// var pokesearch = document.querySelector('#pokesearch');

// async function getPokeData() {
//     // async is a decorator to declare the function is async and give us access to await
//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokesearch.value);
//     // await allows us to tell the code to only continue running when that line has finished
//     var PokeData = await response.json();
//     // convert to json
//     // points to empty div
//     pokeDiv.innerHTML += `<h1>Pokemon Name: ${PokeData.name}</h1>`
//     pokeDiv.innerHTML += `<img src='${PokeData.sprites.front_shiny}'>`
// }
    
// getPokeData();
