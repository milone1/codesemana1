const numbers = [1,2,3,4,5,6,7,8,8,8,8,9];

const constante = numbers.find(number => {
    return number === 2;
});

console.log(constante);


// 2

const eages = [14,12,11,21,18,19,24];

const mayoresdeEdad = eages.filter(x => x >= 18);

const menoresdeEdad = eages.filter(x => x< 18);

console.log(mayoresdeEdad);
console.log(menoresdeEdad);

const pets = [
    {
    type: "perico",
    age:3, 
    color:"blue"
    },
    {
    type: "perro",
    age:1, 
    color:"brown"
    },
    {
    type: "gato",
    age:4, 
    color:"white"
    },
];

const colorBrown = pets.filter(x => x.color === "brown" || x.age >= 2);
console.log(colorBrown);

// 3

const velocidades = [60, 70, 80, 90, 100, 120, 180];

const recortedeVelocidades = velocidades.map(x=>x/2);


const years = [
    {
        año1: "nuevo",
        cifras: 4,
        verdad: true,
    },
    {
        año2: "nuevo",
        cifras: 3,
        verdad: true,
    },
    {
        año3: "nuevo",
        cifras: 5,
        verdad: true,
    },
    {
        año4: "nuevo",
        cifras: 7,
        verdad: true,
    },
]

const duplicarCifras = years.map(x => x.cifras * 2);
console.log(recortedeVelocidades);
console.log(duplicarCifras);


// 4 

const students = ["Juan","Pedro","Martin","Mendez","Panchito"];

const lista = students.forEach((student,index,arreglo)=>{
    console.log(student);
    console.log(index);
    console.log(arreglo);
});



