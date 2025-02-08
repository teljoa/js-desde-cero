/*
Ejercicio 1: Funciones y Arrow Functions

Crea una función llamada saludar que tome un nombre como argumento y muestre un mensaje de saludo 
en la consola. Luego, reescribe la misma función utilizando una arrow function.
*/
let studen=
    {
        id:1,
        nombre:"joan",
        age:20
    };

let saludo=function(studen) {
    return "Buenos dias " + studen.nombre; 
}

console.log(saludo(studen));

let saludo2=studen => "Buenos dias " + studen.nombre;

console.log(saludo2(studen));

/*
Ejercicio 2: Parámetros y Valores por Defecto

Crea una función llamada potencia que calcule la potencia de un número dado a un exponente dado. 
La función debe tener un valor por defecto de exponente igual a 2.
*/
let potencia=function(numero,exponente=2){
    let fin=1;
    for(let i=0;i<exponente;i++){
        fin*=numero;
    }
    return fin;
}

console.log(potencia(4,3));

/*
Ejercicio 3: Funciones de Primera Clase

Crea una función llamada aplica_fn que tome un número y una función como argumentos y aplique la función al 
número. Prueba la función con una función que devuelva el cuadrado del número.
*/
let aplica_fn=function (numero, fuction) {
    return potencia(numero);
}

console.log(aplica_fn(3,potencia()));

/*
Ejercicio 4: Métodos de Programación Funcional

Dado el siguiente array de números [1, 2, 3, 4, 5, 6, 7, 8, 9], realiza las siguientes operaciones:

Utiliza filter para crear un nuevo array con los números pares.
Utiliza map para crear un nuevo array con los cuadrados de los números.
Utiliza reduce para calcular la suma de todos los números.
Utiliza every para verificar si todos los números son mayores que 0.
Utiliza some para verificar si algún número es mayor que 10.
*/
let numeros=[1,2,3,4,5,6,7,8,9];

//a

let pares=numeros.filter(numeros=>numeros%2==0);

console.log(pares);

//b

let cuadrados=numeros.map(numeros => numeros*numeros);

console.log(cuadrados);

//c

let suma=numeros.reduce(numeros=>numeros+numeros);

console.log(suma);

//d

let mayores=numeros.every(numeros=>numeros>0);

console.log(mayores);

//e

let mayore1s=numeros.some(numeros=>numeros>10);

console.log(mayore1s);

/*
Ejercicio 5: Copia y Referencia

Dado el siguiente objeto:

const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad"
  }
};
Crea una copia independiente del objeto persona utilizando spread ({...}).
Modifica la edad en la copia y verifica si la edad en el objeto original ha cambiado.
Modifica la calle en la copia y verifica si la dirección en el objeto original ha cambiado.
*/

const persona={
    nombre:"Juan",
    edad:30,
    direccion:{
        calle:"Calle Principal",
        ciudad:"ciudad"
    }
};

//a

let copiaPersona={...persona};
let copia2Persona= JSON.parse(JSON.stringify(persona))
console.log(copiaPersona);

//b

copiaPersona.edad=40;

console.log(persona);
console.log(copiaPersona);

//c

copiaPersona.direccion.calle="Principal";
copia2Persona.direccion.calle="Otra calle"
console.log(persona);
console.log(copiaPersona);
console.log(copia2Persona);

/*
Ejercicio 6: Desestructuración de Arrays y Objetos

Dado el siguiente array [1, 2, 3, 4, 5]:

Utiliza la desestructuración para asignar los valores a las variables a, b, c, d, y e.
Realiza la misma tarea para el objeto { nombre: "Alice", edad: 25 }.
*/

let numeros2=[1,2,3,4,5];

//a

let [a,b,c,d,e]=numeros2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//b

let person={
    nombre:"Alice",
    edad:25
};

let {nombre,edad}=person;

console.log(nombre);
console.log(edad);

/*
Ejercicio 7: Sets y Eliminación de Duplicados

Dado el siguiente array con nombres repetidos:

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];
Crea un set para eliminar los nombres duplicados.
Convierte el set de nuevo en un array y muestra la lista de nombres únicos.
*/

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

let nombres1=new Set(nombres);

console.log(nombres);
console.log(nombres1);

//b

let nombres2=Array.from(new Set(nombres));

console.log(nombres2);