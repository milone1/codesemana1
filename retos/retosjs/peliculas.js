let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});


const getMovies = async() => {
    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4746064ca0d92d332f88c8132195eec2&language=es-MX&page=${pagina}`);
    

        if (respuesta.status === 200){

            const datas = await respuesta.json();

            let movies = '';
            datas.results.forEach(movie => {
                movies += `
                <div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
						<h3 class="titulo">${movie.title}</h3>
				</div>
                `;
            });

            document.getElementById("conteiner").innerHTML=movies;
        } else if (respuesta.status === 401){
            console.log("error");
        } else if (respuesta.status === 404){
            console.log("la pelicula no existe");
        } else {
            console.log("error desconocido :v");
        }

    } catch (error){
        console.log(error);
    }
}

getMovies();