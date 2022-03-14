/* 
https://api.themoviedb.org/3/movie/popular?api_key=4746064ca0d92d332f88c8132195eec2
*/
const imgMovie = document.querySelector("#imagen");
const titleMovie = document.querySelector("#title");
const synopsis = document.querySelector("#resume");

const number = document.querySelector("#input-text");
const buscar = document.querySelector("#button");

buscar.onclick = () => {
    console.log(number.value);
    getData(number.value);
}

const getData = async(numero = 550) => {
    try {
        const answer = await fetch(`https://api.themoviedb.org/3/movie/${numero}?api_key=4746064ca0d92d332f88c8132195eec2`);
        console.log(answer);
        if (answer.status === 200){
        const results = await answer.json();
        console.log(results);
        const background = results.poster_path;
        console.log(background);
            imgMovie.src = `https://image.tmdb.org/t/p/w500${background}`
            titleMovie.innerHTML = results.title;
            synopsis.innerHTML = results.tagline;

        } else if (respuesta.status === 401){
            alert("error");
        } else if (respuesta.status === 404){
            alert("la pelicula no existe");
        } else {
            alert("error desconocido :v");
        }

    } catch (error){
        alert(error.message);
    }
}

getData();