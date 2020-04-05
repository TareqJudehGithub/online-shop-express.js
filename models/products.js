const fs = require("fs");
const path = require("path");

const p = path.join(
     path.dirname(process.mainModule.filename), 
     "data", 
     "products.json"
);

// cb callback executes once it's done reading the file:
const getProductsFromFile = (cb) => {
    
     fs.readFile(p, (err, fileContent) => {
          if(err) {
              return cb([])
          }
          //to return items in products.json as an array and not text:
          cb(JSON.parse(fileContent));
     });
}

module.exports = class Product {
     constructor(id, title, imageUrl, price, description) {
          this.id = id;
          this.title = title;
          this.imageUrl = imageUrl;
          this.price = price;
          this.description = description;
          
     };
     
     save() {
          //creating new id property 
          getProductsFromFile(products => {
               if (this.id) {
                    const existingProductIndex = products.findIndex(prod =>
                         prod.id === this.id);
                    const updatedProducts = [...products];
                    updatedProducts[existingProductIndex] = this;
                    //replacing the old items contents with the edited ones:
                    fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                         console.log(err);
                    });   
               }
               else{
                    this.id = Math.floor(Math.random()*1000 +1).toString();
                    products.push(this);
                    fs.writeFile(p, JSON.stringify(products), err => {
                         console.log(err);
                    })
               };
          });     
     };
     //calling Product class directly:
     static fetchAll(cb) {
        getProductsFromFile(cb);
     };

     static findById(id, cb) {   // id: get an id as an arguement,
     //and a cb which will be executed right after finding a product.
     getProductsFromFile(products => {
          const product = products.find(p =>  p.id === id);
          cb(product);
     });
     };
};
