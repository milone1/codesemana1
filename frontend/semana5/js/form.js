const array = [];

function obtenerValores(event) {
    console.log(event.target.value);

    array.push({
        [event.target.name]: event.target.value,
    });
}