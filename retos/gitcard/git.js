const nameUser = document.querySelector("#name");
const age = document.querySelector("#age");
const locationUser = document.querySelector("#location");
const imagen = document.querySelector("#img-avatar");
const background = document.querySelector("#img-card-sex");

const followers = document.querySelector("#seguidores");
const likes = document.querySelector("#likes");
const repository = document.querySelector("#repository");

const inputUser = document.querySelector("#conteiner-search");
const buttonSearch = document.querySelector("#button-search");

buttonSearch.onclick = () => {
    if(inputUser.lenght === 7){
        background.classList.add('img-card-woman');
        userGithub(inputUser.value);
    } else {
        background.classList.add('img-card-men');
        userGithub(inputUser.value);
    }

}

const userGithub = async (nombre = "milone1") => {
    try{
        const answer = await fetch(`https://api.github.com/users/${nombre}`);
        const respuesta = await answer.json();
        
        if(respuesta.id === 2){
            imagen.src = respuesta.avatar_url;
            nameUser.innerHTML = respuesta.name;
            age.innerHTML = respuesta.type;
            locationUser.innerHTML = respuesta.location;
            followers.innerHTML = respuesta.followers;
            likes.innerHTML = respuesta.following;
            repository.innerHTML = respuesta.id;

        } else {

            imagen.src = respuesta.avatar_url;
            nameUser.innerHTML = respuesta.name;
            age.innerHTML = respuesta.type;
            locationUser.innerHTML = respuesta.location;
            followers.innerHTML = respuesta.followers;
            likes.innerHTML = respuesta.following;
            repository.innerHTML = respuesta.id;
        }

    }catch(error){
      alert();
    }
}

userGithub();