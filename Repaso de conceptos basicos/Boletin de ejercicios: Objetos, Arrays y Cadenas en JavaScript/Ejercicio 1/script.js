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