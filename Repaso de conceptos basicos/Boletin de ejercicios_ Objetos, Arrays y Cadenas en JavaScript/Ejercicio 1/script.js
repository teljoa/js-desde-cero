/*
Ejercicio 1: Sistema de gestión de inventario
Crea un sistema de gestión de inventario para una pequeña tienda. Debes definir un objeto llamado inventory 
que contenga las siguientes propiedades:

items: un array de objetos, donde cada objeto representa un artículo con las claves name, quantity y price.
totalItems: una propiedad que almacene el número total de artículos disponibles.
Ejemplo inicial:

let inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};
Tareas:

1.Actualiza la propiedad totalItems automáticamente sumando las cantidades de cada artículo del array items.

2.Crea un método addItem(itemName, quantity, price) que añada un nuevo artículo al inventario o actualice el 
quantity si el artículo ya existe.

3.Crea un método removeItem(itemName) que elimine un artículo del inventario basado en su nombre.

4.Usa los métodos avanzados de arrays (forEach, map, filter, reduce) para realizar las siguientes tareas:
  
  Imprime en consola el nombre de todos los artículos que cuestan más de 50.
  Obtén la cantidad total de artículos en stock cuyo nombre contenga la letra "o" (manipulación de cadenas).
*/
let inventory = {
    items: [
      { name: "Laptop", quantity: 5, price: 1200 },
      { name: "Mouse", quantity: 25, price: 20 },
      { name: "Keyboard", quantity: 15, price: 50 }
    ],
    totalItems: 0
  };
  
  //1
  
  inventory.totalItems=inventory.items.reduce((total,item)=> total + item.quantity,0);
  
  console.log(inventory);
  
  //2
  
  function addItem(itemName,quantity,price){
      const exist=inventory.items.find(item => item.name === itemName);
      if(exist){
          exist.quantity += quantity; 
      }else{
          inventory.items.push({ name: itemName, quantity, price });
      }
      inventory.totalItems=inventory.items.reduce((total,item)=> total + item.quantity,0);
  }
  
  addItem("Laptop",2,1200)
  
  console.log(inventory);
  
  //3
  
  function removeItem(itemName){
      inventory.items=inventory.items.filter(item => item.name !=itemName);
      inventory.totalItems=inventory.items.reduce((total,item)=> total + item.quantity,0);
  
  }
  
  removeItem("Mouse");
  
  console.log(inventory);
  
  //4
  
  inventory.items.forEach(item => {
        if (item.price > 50) {
          console.log(item.name);
        }
  })
  
  function totalO(){
      const totalWithO = inventory.items
        .filter(item => item.name.includes("o"))
        .reduce((total, item) => total + item.quantity, 0);
      return totalWithO;
  }
  
  console.log(totalO());