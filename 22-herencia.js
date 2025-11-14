// Herencia 

// Programación oriebtada a objetos

class Product{
    constructor(productName = '', price, available){
        this.productName = productName;
        this.price = price;
    }
    formatProduct(){
    return `El nombre del producto es ${this.productName}, su precio es ${this.price}, y actualmente esta es su disponibilidad ${this.available}`;
    }

}

// se crean los productos
const product1 = new Product('Marcador', 5000);
const product2 = new Product('Rule', 10000);
const product3 = new Product('Book', 7000);

// se imprimen los objetos
// console.log(product1.formatProduct());
// console.log(product2.formatProduct());
// console.log(product3.formatProduct());

// class Book{
//     constructor(bookName, price, isbm){
//         this.bookName = bookName;
//         this.price = price;
//         this.isbn = isbn;
//     }
// }
// const book1 = new Book('El perfume', 10000, 123456789);
// const book2 = new Book('100 años de soledad', 25000, 55555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// console.log(book1);
// console.log(book2);
// console.log(book3);

// ===========================================================================
// Herencia
//  La herencia permite que los objetos reutilicen propiedades y metodos de otros.

// class Book extends Product{
//     constructor(bookName, price, isbn){
//         super(bookName, price)
//         this.isbn = isbn;
//     }
//     formatProduct(){
//         return `El nombre del libro es ${this.productName}, su precio es ${this.price} y su isbn es ${this.isbn}`;
//     }

// }
// const book1 = new Book('El perfume', 10000, 123456789);
// const book2 = new Book('100 años de soledad', 25000, 55555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());

// =============================================================================

// Heredar métodos
// class Book extends Product{
//     constructor(bookName, price, isbn){
//         super(bookName, price)
//         this.isbn = isbn;
//     }
//     formatProduct(){
//         return `${super.formatProduct()} y su isbn es ${this.isbn}`;
//     }

// }
// const book1 = new Book('El perfume', 10000, 123456789);
// const book2 = new Book('100 años de soledad', 25000, 55555555);
// const book3 = new Book('El coronel no tiene quien le escriba', 17800, 777777);

// // console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());

// ===========================================================================================================

class Medicine extends Product{
    constructor(medicineName, price, amount){
        super('', price);
        this.amount = amount;
        this.medicineName = medicineName;
    }
    formatProduct(){
        return `El nombre del medicamento es ${this.productName}, su precio es ${this.price}, y actualmente esta es su cantidad ${this.amount}`;
    }
}
const medicine1 = new Medicine('Dolex', 6000, 28);
const medicine2 = new Medicine('Acetaminofen', 2000, 32);
const medicine3 = new Medicine('Paracetamol', 5000, 37);

console.log(medicine1.formatProduct());
console.log(medicine2.formatProduct());
console.log(medicine3.formatProduct());



