export class Product {
    id:number;
    name:string;
    description:string;
    price:any;
    imageUrl:string;
    category:string;
    color:string;

    constructor(id,name,description = '', price:any, category:string, color:string, imageUrl = '../../../../assets/img/products/default.jpg'){
        this.id = id             
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
        this.category = category
        this.color = color
    }
}
