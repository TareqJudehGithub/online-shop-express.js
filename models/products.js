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
     constructor(props) {
          this.title = props;
     };
     
     save() {
          getProductsFromFile(products => {
               products.push(this); //this refers to the class.
               fs.writeFile(p, JSON.stringify(products), (err) => {
                     console.log(err);
               }); 
          });     
     };
     //calling Product class directly:
     static fetchAll(cb) {
        getProductsFromFile(cb);
     };
};
