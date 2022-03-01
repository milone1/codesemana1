var primerElemento = document.getElementById("primero");

primerElemento.innerHTML = "la siguiente palabra se mostrara en <b class=`i`>negrita y entendra una clase</b>";

var primeroElemento = document.getElementById("first");

primeroElemento.textContent="la siguiente palabra se mostrara en <b class=`i`>negrita y entendra una clase</b>";

var elemento = document.createElement("li"),
contenido = document.createTextNode("4"),
padre = document.getElementById("etiqueta-padre"),
reemplazo = document.getElementById("reemplazar");


elemento.appendChild(contenido),


padre.replaceChild(elemento,reemplazo);

var eliminado = document.getElementById("eliminar"),
etiquetaMadre = document.getElementById("etiqueta-madre");

etiquetaMadre.removeChild(eliminado);