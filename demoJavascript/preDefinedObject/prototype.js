 function book(title, author) {
    this.title = title; 
    this.author  = author;
 }
 var myBook = new book("Perl", "Mohtashim");
         book.prototype.price = null;
         myBook.price = 500;
         myBook.price=200           //latest value is taken
         book.prototype.descriptionOfBook = null;
         myBook.descriptionOfBook = "only for youngsters"
         console.log(myBook);