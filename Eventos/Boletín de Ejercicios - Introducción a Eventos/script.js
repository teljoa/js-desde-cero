/* 
1.1. Crea una página HTML con un botón. Agrega un escuchador de eventos para que cuando 
se haga clic en el botón,se muestre un mensaje en la consola del navegador.

1.2. Agrega otro elemento HTML (por ejemplo, un enlace) en la página y agrega un escuchador 
de eventos para que cuando se pase el mouse sobre el elemento, el color de fondo cambie.

1.3. Agrega un escuchador de eventos al elemento document.body para que cuando se mueva el 
ratón en cualquier punto de la ventana del navegador, muestre en algún elemento (puedes 
agregar un <div> o <p> al HTML) la posición del puntero respecto al navegador y respecto a 
la página.
*/
let boton1 = document.getElementById("miBoton");

boton1.addEventListener("click", function () {
    alert("Has pulsado mi boton.")
})

let enlace = document.getElementById("miEnlace");

enlace.addEventListener("mouseenter",()=> {
    enlace.style.backgroundColor = 'lightblue';
})

enlace.addEventListener("mouseleave",()=> {
    enlace.style.backgroundColor = 'white';
})

document.body.addEventListener("mousemove", function (event){
    document.getElementById('posicion').innerText = `X: ${event.clientX}, Y: ${event.clientY}`;
})

/*
Ejercicio 2: Escuchar eventos de teclado
2.1 Agrega un escuchador de eventos al elemento document.body para que cuando se presione 
cualquier tecla, muestre un mensaje de alerta con el nombre de la tecla pulsada y su código.

2.2 Prueba el escuchador de eventos con diferentes teclas para verificar que muestra 
correctamente el nombre y el código de la tecla pulsada.
*/
//document.body.addEventListener("keydown", (event) => {
//    alert(`La tecla : ${event.key}  .Ha sido pulsada, su codigo es: ${event.code}.`)
//})
/*
Ejercicio 3: Captura y Propagación
3.1. Crea una lista desordenada (<ul>) con varios elementos de lista (<li>) dentro. 
Agrega un escuchador de eventos al elemento <ul> para que cuando se haga clic en cualquier 
elemento de la lista, se muestre un mensaje en la consola indicando el texto del elemento 
clickeado.

3.2. Modifica el ejercicio anterior para que el mensaje en la consola muestre el nivel de jerarquía en el DOM del 
elemento clickeado. Por ejemplo, si se hace clic en un <li>, el mensaje podría decir "Clickeaste en un elemento de nivel 2".
*/
document.getElementById('miLista').addEventListener('click', function (event) {
    console.log(`Clickeaste en: ${event.target.innerText}`);
})

document.getElementById('miLista').addEventListener('click', function(event) {
    let level = event.target.parentElement.tagName === 'UL' ? 2 : 1;
    console.log(`Clickeaste en un elemento de nivel ${level}`);
});
/*
Ejercicio 4: Eventos de formulario
4.1. Crea un formulario HTML con campos de entrada para el nombre y el correo electrónico. Agrega
un botón "Enviar" al formulario. Cuando se haga clic en el botón, valida que los campos de 
entrada no estén vacíos y muestra un mensaje de éxito o error en la página en función de la 
validación.

4.2. Agrega una función que dispare un evento personalizado "formularioEnviado" cuando se envíe 
el formulario con éxito. Escucha este evento y muestra un mensaje personalizado en la consola 
cuando se dispare.
*/
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje');
    if (nombre && correo) {
        mensaje.textContent = 'Formulario enviado con éxito';
        const evento = new CustomEvent('formularioEnviado');
        this.dispatchEvent(evento);
    } else {
        mensaje.textContent = 'Por favor, completa todos los campos';
    }
});

document.getElementById('miFormulario').addEventListener('formularioEnviado', function() {
    console.log('Evento formulario: Formulario enviado');
});
/*
Ejercicio 5: Eventos personalizados
5.1. Crea un nuevo evento personalizado llamado "miEvento" utilizando new CustomEvent().

5.2. Agrega un escuchador de eventos a un elemento HTML (puedes usar un botón) para escuchar el evento "miEvento" y mostrar 
un mensaje de alerta cuando ocurra.

5.3. Dispara manualmente el evento "miEvento" en el elemento y verifica que se muestra el mensaje de alerta.
*/
const miEvento = new CustomEvent('miEvento');

document.getElementById('botonEvento').addEventListener('miEvento', function() {
    alert('¡Mi evento fue disparado!');
});

document.getElementById('botonEvento').addEventListener('click', function() {
    document.getElementById('botonEvento').dispatchEvent(miEvento);
});