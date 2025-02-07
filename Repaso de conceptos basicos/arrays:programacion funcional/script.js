//Ejercicio 1
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

//Ejercicio 2
let potencia=function(numero,exponente=2){
    let fin=1;
    for(let i=0;i<exponente;i++){
        fin*=numero;
    }
    return fin;
}

console.log(potencia(4,3));

//Ejercicio 3 
let aplica_fn=function (numero, fuction) {
    return potencia(numero);
}

console.log(aplica_fn(3,potencia()));

//Ejercicio 4
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

//Ejercicio 5

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

//Ejercicio 6

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

//Ejercicio 7

const nombres = ["Ana", "Juan", "Luis", "Ana", "Luis", "María"];

let nombres1=new Set(nombres);

console.log(nombres);
console.log(nombres1);

//b

let nombres2=Array.from(new Set(nombres));

console.log(nombres2);