const imageProfile = document.querySelector("#img-profile");

const obtenerDatosGitHub = async () => {
  //* En este ejemplo await esta haciendo lo siguiente
  //* Ejecuta fetch con la url y una vez que acabe la ejecucion de fetch recien haz el console.log
  const response = await fetch("https://api.github.com/users/JhonyWalker1");
  //* es decir hasta que la ejecucion de fetch no termine no se ejecutura la siguiente linea
  //* ahora necesitamos leer la data que estamos solicitando
  //* para poder leer esta informacion debemos transformar el response a un JSON
  const data = await response.json();
  imageProfile.src = data.avatar_url;
  console.log(data);
};
obtenerDatosGitHub();