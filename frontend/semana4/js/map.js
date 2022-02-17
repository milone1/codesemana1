const myArray = [1,2,3,4,5,6,7,8,9,10];

const duplicar = myArray.map((valor,index)=>{
    console.log(index);
    return valor * 2;
})

console.log(duplicar);
console.log(myArray);



const students = [
  { 
    email: "Lycanpirlo@gmail.com"
  },
  {
    email: "juanMarco@gmail.com"
  },
  {
    email: "PedroElSabroso@gmail.com"
  },
  {
    email: "JuanFrank@gmail.com"
  },
];

const serializedStudents = students.map(function (student){
  student.email = student.email.toLocaleLowerCase();
  return student ;
});
console.log(serializedStudents);

const mascotas = [
    {
        nombre: "pepe",
        edad: 14,
        tipo: "perro"
    },
    {
        nombre: "mani",
        edad: 21,
        tipo: "canario"
    },
    {
        nombre: "vaca",
        edad: 18,
        tipo: "porcino"
    },
];
function suma(ns){
    let acumulador = 0;
    for (let i = 0; i<edades.length; i++){
        acumulador += ns[i];
    }

    return acumulador;
}

const edades = mascotas.map(x => x.edad);

const resuldelaSuma = suma(edades);
console.log(edades);
console.log((resuldelaSuma / edades.length));