function mostrar(){
    swal.fire("hola mundo");
}

function mostrarUno(){
    swal("titulo", "contenido");
}

function mostrarDos(){
    swal("titulo","contenido","success");
}

function mostrarDosUno(){
    swal("titulo","contenido","error");
}

function dosBotones(){
    swal("4 opciones?",{

        buttons: ["ok","no"]

    });
}

function tercerBoton(){
    swal({

        tittle: "encabezado",
        text: "texto lorem lorem",
        icon: "success",
        buttons: ["ok","no"]

    })
}