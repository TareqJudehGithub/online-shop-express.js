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
     constructor(title, imageUrl, price, description) {
          this.title = title;
          this.imageUrl = imageUrl;
          this.price = price;
          this.description = description;
          
     };
     
     save() {
          //creating new id property 
          this.id = Math.floor(Math.random()*1000 + 1).toString();

          getProductsFromFile(products => {
               products.push(this); //this refers to the class.
               fs.writeFile(p, JSON.stringify(products), err => {
                     console.log(err);
               }); 
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
