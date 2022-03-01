const crear = document.querySelector("#crear-session");
const obtener = document.querySelector("#obtener-session");
const eliminar = document.querySelector("#eliminar-session");

crear.onclick = function(){
    sessionStorage.setItem("variable-1","Mi primera variable");
}

obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable-1");
    console.log(variable);
}

eliminar.onclick = function(){
    sessionStorage.removeItem("variable-1");
}