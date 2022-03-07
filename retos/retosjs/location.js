/* 
api/location/44418/2013/4/27/ 
*/

const img = document.querySelector("#img");
const namePokemon = document.querySelector("#name");
const idPokemon = document.querySelector("#id");
const statsPokemon = document.querySelector("#stats");
const habilitiesPokemon = document.querySelector("#habilities");

const ingresoMombre = document.querySelector("#input-name");
const buscar = document.querySelector("#button-enviar");

buscar.onclick =  () => {
    console.log(ingresoMombre.value);
    obtenerDatos(ingresoMombre.value);
}

const obtenerDatos = async( pokemon = "ditto") => {
     try{
        const respuestas = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const answer = await respuestas.json();
        console.log(answer);
        img.src = answer.sprites.back_shiny;
        namePokemon.innerHTML = answer.name;
        idPokemon.innerHTML = answer.id;
        statsPokemon.innerHTML = answer.height;
        habilitiesPokemon.innerHTML = answer.weight;
     } catch(error) {
         console.log(error);
     }
}
obtenerDatos();