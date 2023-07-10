const products= [];

module.exports = class Product {
    constuctor(t){
        this.title= t;
    }

    save() {
        products.push(this);
    }
    static fetchAll(){
       return products;
    }
}