var subtitulo = document.createElement("h2");

var contenido = document.createTextNode("DIA 1:");

subtitulo.appendChild(contenido);

subtitulo.setAttribute("aling","center");

document.getElementById("subtitulo").appendChild(subtitulo);

var subtituloTwo = document.createElement("h2");

var contenidoTwo = document.createTextNode("DIA 2:");

var subtituloOne = document.createElement("h2");

var contenidoOne = document.createTextNode("DIA 3: ");

subtituloTwo.appendChild(contenidoTwo);

subtituloTwo.setAttribute("aling","center");

subtituloOne.appendChild(contenidoOne);

subtituloOne.setAttribute("aling","center");

document.getElementById("subtitulo-uno").appendChild(subtituloTwo);

document.getElementById("subtitulo-dos").appendChild(subtituloTwo);



var elemento = document.createElement("li"),
contenidotres = document.createTextNode("ejemplo 0:"),
padre = document.getElementById("lista-ordenada");

elemento.appendChild(contenidotres);

padre.appendChild(elemento);

var elementoDos =  document.createElement("li"),
contenidoDose = document.createTextNode("ejemplo 0: "),
padreDos = document.getElementById("clase-padre"),
primerHijo = document.getElementById("primer-hijo");

elementoDos.appendChild(contenidoDose);

padreDos.insertBefore(elementoDos,primerHijo);