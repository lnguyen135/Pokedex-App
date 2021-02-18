const colorMap = {
    grass:'background__green',
    fire:'background__red',
    lightning:'background__yellow',
    darkness:'background__blue',
    fairy:'background__pink',
    fire:'background__purple',
    psychic:'background__brown',
    metal:'background__orange',
    dragon:'background__lightblue',
    water:'background__lightsalmon',
    fighting:'background__lightseagreen',
    bug:'background__lighsteelblue',
    electric:'background__seagreen',
    ground:'background__salmon',
    poison:'background__lightgoldenrodyellow',
    ghost:'background__lightslategrey',
    normal:'background__lightskyblue'
    

}

function getPokemon(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            
           // displayPokemon(data);
          const parsedPokemon = JSON.parse(this.responseText);

          
//Promise.all(pokemon).then((results) => {
           const pokemon = parsedPokemon.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            color: result.types[0].type.name
        }));
        
    
 
        displayPokemon(pokemon);
    }
};
          //console.log(data);
        
    

    xhr.open("GET", "http://localhost:4000/pokemon")
    xhr.send();
}
getPokemon();


const displayPokemon = (pokemon) => {
    console.log(pokemon);

    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => {
                console.log(pokemon.color)
                return `
        <li class="card ${colorMap[pokeman.color]}">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `}
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};