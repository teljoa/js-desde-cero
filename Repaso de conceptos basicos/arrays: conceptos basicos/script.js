//Ejercicio 1

//1.
let listaCompla=["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];

//2.
let listanueva=listaCompla.splice(1,1);
console.log(listanueva);
console.log(listaCompla);

//3.
listanueva=listaCompla.splice(3,0,"Naranjas","Sandía");
console.log(listanueva);
console.log(listaCompla);

//4.
listanueva=listaCompla.splice(1,1,"cerezas","nisperos");
console.log(listanueva);
console.log(listaCompla);

//5.
console.log(listaCompla);

//Ejercicio 2

//1.
let original=["dsjugfkjds",325423,"ewfsw"];

//2.
let copia=original.slice(0);
console.log(original);
console.log(copia);

//3.
copia.splice(1,1,"rhouigers");
console.log(original);
console.log(copia);

//Ejercicio 3

//1.
let notas=[4,8,3,10,5];
console.log(notas);

//2.
notas.sort((a,b)=>a-b);

//3.
console.log(notas);

//Ejercicio 4 

//1.
let alumnos=[
    {
        id:1,
        name:"Alumno1",
        age:20
    },
    {
        id:1,
        name:"Alumno2",
        age:17
    },
    {
        id:1,
        name:"Alumno3",
        age:30
    },
    {
        id:1,
        name:"Alumno4",
        age:29
    },
    {
        id:1,
        name:"Alumno5",
        age:40
    }
];

console.log(alumnos);

//2.
alumnos.sort((a,b)=>a.age-b.age);

//3.
console.log(alumnos);

//Ejercicio 5

//1.
let array1=["rgrg",1,215423,"fewdgfd"];
let array2=[143124,"fdegrew",1321,"frdegv"];

console.log(array1);
console.log(array2);

//2.
let concatenado=array1.concat(array2);
console.log(concatenado);

//3.
let concatenadorevers=concatenado.reverse();
console.log(concatenadorevers);

//4.
console.log(concatenado.indexOf("Plátanos"));

//5.
console.log(concatenado.lastIndexOf("Platanos"));