//tabla de multiplicacion.


let num = +prompt("Ingrese un numero para for ");


function multiplicar(num){
    
    for (let i = 0; i<=10; i++){
        let result = i * num;
       console.log(`tabla del ${num}: ${num} x ${i} = ${result}`);
    }
}

multiplicar(num);

//* mientras
let numone = +prompt("Ingrese un numero para while");

function multiplicarWhile (numone){
    let incremento=0;
    while(incremento <= 10){
        console.log(`tabla del ${numone}: ${numone} x ${incremento} = ${(numone*incremento)} `);
        incremento++;
    }
}

multiplicarWhile(numone);

