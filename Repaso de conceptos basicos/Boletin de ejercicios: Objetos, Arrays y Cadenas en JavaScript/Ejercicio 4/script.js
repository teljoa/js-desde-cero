let bookStore = {
    books: [
      { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
      { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
    ]
  };

//1

function addBook(title,author,price,category){

    const exist=bookStore.books
    .find(book => book.title === title && book.author === author 
    && book.price === price && book.category === category);
    
    if(!exist) bookStore.books.push({title,author,price,category});
  
  }
  
  addBook("1985","George Arwell",19,"Non-fiction");
  
  console.log(bookStore);
  
  //2
  
  function getBooksByCategory(category) {
     let bookCategory=bookStore.books.filter(book => book.category === category);
  
     return bookCategory;
  }
  
  console.log(getBooksByCategory("Fiction"));
  
  //3
  
  const totalPrice=bookStore.books.reduce((total,book)=> total + book.price,0);
  
  console.log(totalPrice);
  
  //4
  
  const bootksMayor=bookStore.books.filter(book => book.price > 18);
  
  console.log(bootksMayor);
  
  //5
  
  bookStore.books.sort((a,b)=>b.price-a.price);
  
  console.log(bookStore);