function Book(name, year) {
  this.name = name;
  this.year = year;
  this.verify = function () { return this.name === this.year; };
}

var myBook = new Book("1984", 1984);
myBook.name
myBook.verify