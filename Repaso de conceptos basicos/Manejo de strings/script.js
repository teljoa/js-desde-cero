//Parte 1
//1.
function longitud(nombre){
    let result=0;

    for(let i=0;i<nombre.length;i++){
        result++;
    }

    return result;
}

longitud("ana");
//2.
function devuelvePrimeraLetra(nombre){
    return nombre.charAt(0);
}

devuelvePrimeraLetra("Joaquin");

//3.
function devuelveUltimaLetra(nombre){
    return nombre.at(-1);
}

devuelveUltimaLetra("Joaquin");

//4.
function devuelveEnesimaLetra(nombre,posicion){
    return nombre.at(posicion);
}

devuelveEnesimaLetra("joaquin",3);

//5.

console.log("wonderful day".substring(3,7));

//6.

function devuelveMasLarga(strin1,strin2){
    if(strin1.length>strin2.length){
        return console.log(strin1);
    }else{
        return console.log(strin2);
    }
}

devuelveMasLarga("erdhgbdf","revhthrtghg4");

//7.

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

//8.

function generarNombre(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.substring(0,3) + strin2.substring(0,3) + strin3.substring(0,3);
    }
}

let resultado= generarNombre("edgrr","gragff","rgassf");

console.log(resultado);

//9.

function generarNombre2(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.at(-1) + strin2.at(-1) + strin3.at(-1);
    }
}

let resultado2= generarNombre("edgrr","gragff","rgassf");

console.log(resultado);

//10

function generarNombre3(strin1,strin2,strin3){
    if(strin1.length<5 || strin2.length<5 || strin3.length<5){
        return "error";
    }else{
        return strin1.substring(strin1.length - 3,strin1.length - 1) + strin2.substring(strin2.length - 3,strin2.length - 1) + strin3.substring(strin3.length - 3,strin3.length - 1);
    }
}

let resultado3= generarNombre("edgrr","gragff","rgassf");

console.log(resultado);

//11.

function tieneLetra(string1,letra){
    return string1.indexOf(letra) == -1 ? false : true;
}

tieneLetra("grfegeg","f");

//12.

function tieneLetra2(string1,letra){
    return string1.indexOf(letra.toLocaleLowerCase()) == -1 ? false : true;
}

tieneLetra2("grfegeg","F");

//13.

function crearPalabra(letra,numero){
   let palabra="";

   for(let i=0;i<numero;i++){
    palabra+=letra;
   }
   return palabra;
}

crearPalabra("g",7);

//14.

function crearPalabra2(letra,numero){
    let palabra="";
 
    for(let i=0;i<numero;i++){
     palabra+=letra.toLocaleUpperCase();
    }
    return palabra;
 }
 
 crearPalabra2("g",7);

//15.

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

//16.

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

//17.

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

//18.

function toCase(palabra){
    return palabra.toLocaleLowerCase() + "-" + palabra.toLocaleLowerCase();
}

toCase("fdmgñlodfkv");

//19.

function shortcut(cadena1,cadena2){
    return cadena1.at(0).toLocaleUpperCase() + cadena2.at(0).toLocaleUpperCase();
}

shortcut("gfsdgrs","grgdsf");

//20.

function firstChar(cadena){
    return cadena.trim().at(0);
}

firstChar(" Rosa Parks ");

//21.

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

//22.

function firstWord(cadena){
    let palabra =cadena.split(" ")[0];
    return palabra;
}

firstWord("Hola mundo");

//Parte 2

//1.

function saludoPersonalizado(nombre,edad){
    return `Hola ${nombre} , tienen ${edad} años`;
}

saludoPersonalizado("joaquin",25);

//2.

const listaDeCompras = (items) => {
    return `Lista de compras: 
    - ${items.join('\n       - ')}`;
};

console.log(listaDeCompras(["agua", "pan"]));

//3.

function informacionProducto(producto) {
    return `Producto: ${producto.nombre}, Precio: ${producto.precio}€, Categoría: ${producto.categoria}`;
}


const producto = { nombre: "Camiseta", precio: 20, categoria: "Ropa" };
console.log(informacionProducto(producto));

//Parte 3

function validarDNI(dni){
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const numero = parseInt(dni.slice(0, -1), 10);
    const letraDada = dni.slice(-1).toUpperCase();
    const letraCorrecta = letras[numero % 23];

    return letraDada!=null ? letraDada === letraCorrecta:letraCorrecta; 
}

console.log(validarDNI("12345678Z"));
console.log(validarDNI("12345678J"));