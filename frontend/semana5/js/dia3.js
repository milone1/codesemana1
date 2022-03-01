var elemento = document.createElement("div"),
padre = document.getElementById("contenedor"),
referencia = document.getElementsByTagName("div")[0];


elemento.setAttribute("class","red");
padre.insertBefore(elemento,referencia);

var elementoAzul = document.createElement("div"),
referenciaDos = document.getElementsByTagName("div")[1];
elementoAzul.setAttribute("class","azul");
padre.insertBefore(elementoAzul, referenciaDos);

