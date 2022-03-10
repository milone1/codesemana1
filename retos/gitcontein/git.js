
const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocation = document.querySelector("#github-location");
const githubTwitter = document.querySelector("#github-twitter");
const githubUrl = document.querySelector("#github-url");
const githubBuild = document.querySelector("#github-build");

// input y boton
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

githubActionSearch.onclick = () => {
  const username = githubInputSearch.value;
  githubInputSearch.value = "";
  // aca nos falta validar si el input esta vacio
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "Debe llenar el campo usuario",
      icon: "error",
    });
    return;
  }
  //! ojo solo llega a ejecutar esta funcion si el username no esta vacio
  //! recuerden que el return termina la ejecucion
  // a que funcion debo llamar?
  obtenerDatosGitHub(username);
};

// vamos a detectar el evento de enter cuando estemos en el input
githubInputSearch.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    obtenerDatosGitHub(event.target.value);
  }
});

// El valor linder3hs solo sera valido cuando usuername este vacio
const obtenerDatosGitHub = async (username = "linder3hs") => {
  //* En este ejemplo await esta haciendo lo siguiente
  //* Ejecuta fetch con la url y una vez que acabe la ejecucion de fetch recien haz el console.log
  const response = await fetch(`https://api.github.com/users/${username}`);
  //* es decir hasta que la ejecucion de fetch no termine no se ejecutura la siguiente linea
  //* para poder leer esta informacion debemos transformar el response a un JSON
  const data = await response.json();

  // data.message solo existe cuando el usuario no existe
  // y su valor es Not Found
  if (data.message === "Not Found") {
    Swal.fire({
      title: "Error",
      text: "No se encontro al usuario",
      icon: "error",
    });

    return;
  }

  setDataUser(data);
};

const formatDate = (fecha) => {
  let date = new Date(fecha);
  return date.toISOString().split("T")[0];
};

const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  githubName.innerHTML = data.name;
  githubBio.innerHTML = data.bio;
  githubUsername.innerHTML = `@${data.login}`;
  githubJoined.innerHTML = formatDate(data.created_at);
  githubRepos.innerHTML = data.public_repos;
  githubFollowers.innerHTML = data.followers;
  githubFollowing.innerHTML = data.following;
  githubLocation.innerHTML = data.location;
  githubTwitter.innerHTML = data.twitter_username;
  githubUrl.innerHTML = data.html_url;
  githubBuild.innerHTML = `@${data.login}`;
};

//? Llamamos a la funcion
obtenerDatosGitHub();