export class Product{
    product_id: Number;
    name: String;
    description: String;
    price: Number;
    images: String[];

    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price; 
    }
}