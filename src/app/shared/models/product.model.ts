export class Product{
    name: String;
    description: String;
    price: Number;
    tags: String[];
    
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price; 
    }
}