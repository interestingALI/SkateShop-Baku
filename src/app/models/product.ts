export class Product {
    id:number;
    name:string;
    description:string;
    price:any;
    imageUrl:string;

    constructor(id,name,description = '', price:any = 'Out of Stock', imageUrl = '../../../../assets/img/products/default.jpg'){
        this.id = id             
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
