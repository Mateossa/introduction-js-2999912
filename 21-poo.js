// Programación oriebtada a objetos

class Product{
    constructor(productName, price, available){
        this.productName = productName;
        this.price = price;
        this.available = available;
    }
    formatProduct(){
    return `El nombre del producto es ${this.productName}, su precio es ${this.price}, y actualmente esta es su disponibilidad ${this.available}`;
    }

}

// se crean los productos}
const product1 = new Product('Marcador', 5000, true);
const product2 = new Product('Rule', 10000, true);
const product3 = new Product('Book', 7000, false);

// se imprimen los objetos
console.log(product1.formatProduct());
console.log(product2.formatProduct());
console.log(product3.formatProduct());