var element = document.createElement("h1");

var contenidoDelTitulo = document.createTextNode("El faenon");

element.appendChild(contenidoDelTitulo);

element.setAttribute("align","center");

document.getElementById("titulo").appendChild(element);

document.get