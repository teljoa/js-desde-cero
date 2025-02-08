/*
Ejercicio 1: Crear y Manipular Arrays

1.Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', 
y 'Mandarinas'.

2.Usa el método splice para eliminar las 'Manzanas' de la lista de compra.

3.Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.

4.Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.

5.Imprime la lista de compra final por la consola.
*/
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

/*
Ejercicio 2: Copiar un Array

1.Crea un array llamado original con algunos elementos.

2.Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.

3.Modifica un elemento en copia y verifica si también se modifica en original.
*/
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

/*
Ejercicio 3: Ordenar Notas

1.Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].

2.Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.

3.Imprime el array de notas ordenado por la consola.
*/
//1.
let notas=[4,8,3,10,5];
console.log(notas);

//2.
notas.sort((a,b)=>a-b);

//3.
console.log(notas);

/* 
Ejercicio 4: Ordenar un Array de Objetos

Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega 
al menos 5 objetos a este array.

Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el 
método sort.

Imprime el array de alumnos ordenado por la consola.
*/
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

/*
Ejercicio 5: Otros Métodos de Array

Crea dos arrays, array1 y array2, con algunos elementos.

Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.

Utiliza el método reverse para invertir el orden de los elementos en concatenado.

Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.

Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
*/

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