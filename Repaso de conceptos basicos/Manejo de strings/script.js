//Parte 1
/*1. Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto
y devuelva el número de letras que tiene.

Por ejemplo la siguiente llamada a la función:

longitud("Ana");
Debería devolver 3.
*/
function longitud(nombre){
    let result=0;

    for(let i=0;i<nombre.length;i++){
        result++;
    }

    return result;
}
longitud("ana");
/*2. Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una 
cadena de texto y devuelva la primera letra.
*/
function devuelvePrimeraLetra(nombre){
    return nombre.charAt(0);
}
devuelvePrimeraLetra("Joaquin");
/*3.Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una 
cadena de texto y devuelva la última letra.
*/
function devuelveUltimaLetra(nombre){
    return nombre.at(-1);
}
devuelveUltimaLetra("Joaquin");
/*4.Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una 
cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.
*/
function devuelveEnesimaLetra(nombre,posicion){
    return nombre.at(posicion);
}
devuelveEnesimaLetra("joaquin",3);
/*5.Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la 
cadena «wonderful day», es decir “derf”.
*/
console.log("wonderful day".substring(3,7));
/*6.Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto 
y devuelva la mayor. En caso de que ambas cadenas sean iguales, devolveremos la correspondiente 
al primer parámetro de la función.
*/
function devuelveMasLarga(strin1,strin2){
    if(strin1.length>strin2.length){
        return console.log(strin1);
    }else{
        return console.log(strin2);
    }
}
devuelveMasLarga("erdhgbdf","revhthrtghg4");
/*7.Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto 
y devuelva la mayor. En caso de que al menos dos cadenas tengan igual longitud, devolveremos el 
texto Hay al menos dos cadenas iguales.
*/
function devuelveMasLarga2 (strin1,strin2,strin3) {
    if(strin1.length>strin2.length && strin1.length>strin3.length){
        return console.log(strin1);
    }else if(strin1.length<strin2.length && strin2.length>strin3.length){
        return console.log(strin2);
    }else if(strin1.length==strin2.length || strin1.length==strin3.length || strin2.length==strin3.length){
        return console.log("Almenos dos cadenas son iguales");
    }else if(strin3.length>strin1.length && strin3.length>strin2.length){
        return console.log(strin3);
    }
}
devuelveMasLarga2("edgr","gragf","rgssf");
/*8.Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto. 
Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. 
Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras 
letras de cada palabra.
*/
function generarNombre(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.substring(0,3) + strin2.substring(0,3) + strin3.substring(0,3);
    }
}
let resultado= generarNombre("edgrr","gragff","rgassf");
console.log(resultado);
/*9.Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto. 
Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. 
Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de 
cada palabra.
*/
function generarNombre2(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.at(-1) + strin2.at(-1) + strin3.at(-1);
    }
}
let resultado2= generarNombre("edgrr","gragff","rgassf");
console.log(resultado);
/*10Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto. 
Si la longitud de alguna cadena cadena es menor que cinco, la función debe devolver el texto ‘error’. 
Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas 
letras de cada palabra.
*/
function generarNombre3(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.substring(strin1.length - 3,strin1.length - 1) + 
               strin2.substring(strin2.length - 3,strin2.length - 1) + 
               strin3.substring(strin3.length - 3,strin3.length - 1);
    }
}
let resultado3= generarNombre("edgrr","gragff","rgassf");
console.log(resultado);
/*11.Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra 
y devuelva true si la letra esta presente en la palabra y false si no lo esta. Utilizar para ello el 
método indexOf.
*/
function tieneLetra(string1,letra){
    return string1.indexOf(letra) == -1 ? false : true;
}
tieneLetra("grfegeg","f");
/*12.Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro 
esta en mayúsculas o minúsculas.
*/
function tieneLetra2(string1,letra){
    return string1.indexOf(letra.toLocaleLowerCase()) == -1 ? false : true;
}
tieneLetra2("grfegeg","F");
/*13. Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere 
una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.
*/
function crearPalabra(letra,numero){
   let palabra="";

   for(let i=0;i<numero;i++){
    palabra+=letra;
   }
   return palabra;
}
crearPalabra("g",7);
//14.Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.
function crearPalabra2(letra,numero){
    let palabra="";
 
    for(let i=0;i<numero;i++){
     palabra+=letra.toLocaleUpperCase();
    }
    return palabra;
}
crearPalabra2("g",7);
/*15.Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva 
cadena que tendrá un guion medio detrás de cada letra. Utilizar para ello un bucle for.
*/
function addGuiones(palabra){
    let palabraN="";

    for(let i=0;i<palabra.length;i++){
        if(i<palabra.length-1){
            palabraN+=palabra.charAt(i)+ "-";
        }
        else{
            palabraN+=palabra.charAt(i);
        }
    }
    return palabraN;
}
addGuiones("frgbnmdsf");
/*16. Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra 
y devuelva el número de veces que esa letra esta presente en la palabra. Utilizar para ello un bucle for.
*/
function contadorDeLetras(palabra1,letra){
    let repeticiones=0;

    for(let i=0;i<palabra1.length;i++){
        if(palabra1.charAt(i)==letra){
            repeticiones++;
        }
    }
    return repeticiones;
}
contadorDeLetras("rhglkrsdfgg","g");
/*17. Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en 
/mayúsculas o minúsculas Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos 
cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente.
Utilizar para ello un bucle for. No tener en cuenta si la letra pasada como parámetro esta en mayúsculas 
o minúsculas.
*/
function contadorDeLetras2(palabra1,palabra2,letra){
    let repeticiones1=0;
    let repeticiones2=0;

    for(let i=0;i<palabra1.length;i++){
        if(palabra1.charAt(i).toLocaleLowerCase()==letra.toLocaleLowerCase()){
            repeticiones1++;
        }
    }
    for(let i=0;i<palabra2.length;i++){
        if(palabra1.charAt(i).toLocaleLowerCase()==letra.toLocaleLowerCase()){
            repeticiones2++;
        }
    }
    if(repeticiones1>repeticiones2){
        return palabra1;
    }else{
        return palabra2;
    }
}
contadorDeLetras2("rhglkrsdfgg","hgeriglfefewg","G");
/*18.Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva 
esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

Por ejemplo, la siguiente llamada a la función:

toCase("Pablo");

Devería devolver: pablo-Pablo
*/
function toCase(palabra){
    return palabra.toLocaleLowerCase() + "-" + palabra.toLocaleLowerCase();
}

toCase("fdmgñlodfkv");
/*19. Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada 
una de las dos cadenas.Por ejemplo, la llamada a la función:

shortcut('Amnesty', 'International');
Debería devolver «AI».
*/
function shortcut(cadena1,cadena2){
    return cadena1.at(0).toLocaleUpperCase() + cadena2.at(0).toLocaleUpperCase();
}
shortcut("gfsdgrs","grgdsf");
/*20.Escribe una función llamada firstChar, que devuelva la primera letra que no sea un espacio cuando 
una cadena de texto es pasada.Para ello, podemos eliminar los espacios en blanco que pudiera haber al 
principio y al final de la cadena de texto utilizando la el método trim(). Si no estás muy seguro de como 
funciona este método, consúltalo en internet, que no es tan difícil!.

Por ejemplo, la llamada a la función:

firstChar(" Rosa Parks ");
Debería devolver R.
*/
function firstChar(cadena){
    return cadena.trim().at(0);
}
firstChar(" Rosa Parks ");
/*21.Escribe una función llamada indexOfIgnoreCase que reciba dos cadenas de texto y devuelva la posición 
de la primera ocurrencia de la segunda cadena de texto en la primera. La función no debería tener en cuenta 
mayúsculas y minúsculas.

Por ejemplo:

indexOfIgnoreCase("bit","it");
y

indexOfIgnoreCase("bit","IT");
deberían devolver 1
*/
function indexOfIgnoreCase(cadena1,cadean2){
    let coincidencias=0;
    let encontrada=false;
    let posicion=0;

    for(let i=0;i<cadena1.length;i++){
        for(let j=0;j<cadean2.length;j++){
            if(cadena1.at(i).toLocaleLowerCase()==cadean2.at(j).toLocaleLowerCase()){
                coincidencias++;
            }else{
                coincidencias=0;
            }
            if(cadean2.length-1==coincidencias){
                encontrada=true;
                posicion=i;
            }else{
        }
        if(encontrada){
            return posicion;
        }
        }
    }
    return "No hay coincidecias";
}
indexOfIgnoreCase("bit","it");
indexOfIgnoreCase("bit","IT");
/*22. Escribe una función llamada firstWord que reciba como parámetro de entrada una cadena de texto y 
devuelva la primera palabra de esa cadena. La primera palaba de la cadena serán todos los caracteres que 
hay hasta el primer espacio.

Por ejemplo:

firstWord("see and stop");
debería devolver «see».
*/
function firstWord(cadena){
    let palabra =cadena.split(" ")[0];
    return palabra;
}
firstWord("Hola mundo");
//Parte 2

/*1.Crea una función llamada saludoPersonalizado que tome un nombre y una edad como argumentos y utilice 
un template literal para devolver un saludo personalizado que incluya el nombre y la edad.
*/
function saludoPersonalizado(nombre,edad){
    return `Hola ${nombre} , tienen ${edad} años`;
}
saludoPersonalizado("joaquin",25);
/*2.Utiliza un template literal para crear una cadena que muestre una lista de compras con varios elementos. 
Luego, muestra esa cadena en la consola.
*/
const listaDeCompras = (items) => {
    return `Lista de compras: 
    - ${items.join('\n       - ')}`;
};
console.log(listaDeCompras(["agua", "pan"]));
/*3.Escribe una función llamada informacionProducto que tome un objeto con información de un producto 
(nombre, precio, categoría, etc.) y utilice un template literal para generar una descripción del producto. 
Luego, muestra esa descripción en la consola.
*/
function informacionProducto(producto) {
    return `Producto: ${producto.nombre}, Precio: ${producto.precio}€, Categoría: ${producto.categoria}`;
}
const producto = { nombre: "Camiseta", precio: 20, categoria: "Ropa" };
console.log(informacionProducto(producto));

//Parte 3
/*
Implementa una función llamada validarDNI que tome un número de DNI (con o sin letra) como argumento y 
determine si es un DNI válido. La función debe calcular la letra correspondiente al número y compararla 
con la letra proporcionada (si se proporciona). Devuelve true si es válido y false si no lo es.
*/
function validarDNI(dni){
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const numero = parseInt(dni.slice(0, -1), 10);
    const letraDada = dni.slice(-1).toUpperCase();
    const letraCorrecta = letras[numero % 23];

    return letraDada!=null ? letraDada === letraCorrecta:letraCorrecta; 
}

console.log(validarDNI("12345678Z"));
console.log(validarDNI("12345678J"));