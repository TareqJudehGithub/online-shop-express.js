const fs = require("fs");
const path = require("path");

const p = path.join(
     path.dirname(process.mainModule.filename),
     "data",
     "cart.json"
);

module.exports = class Cart {

     static addProduct(id, productPrice) {
          // Fetch the previous cart
          fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
              cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(
              prod => prod.id === id
            );
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // Add new product/ increase quantity
            if (existingProduct) {
              updatedProduct = { ...existingProduct, qty: existingProduct.qty + 1 };
              cart.products = [...cart.products];
              cart.products[existingProductIndex] = updatedProduct;
            }
             else {
              updatedProduct = { id: id, qty: 1 };
              cart.products = [...cart.products, updatedProduct];
            }
            const parseProductPrice = parseFloat(productPrice);
            cart.totalPrice = parseFloat(cart.totalPrice+ parseProductPrice);

            fs.writeFile(p, JSON.stringify(cart), err => {
              console.log(err);
            });
          });
        };

      static deleteProduct(id, productPrice) { //id of the product to del, price to update total cart price.
        //read the file:
        fs.readFile(p, (err, fileContent) => {
          // let cart = {products: [], totalPrice: 0}
          if(err){
            return;  //if error, there's nothing to del
          }
          // cart = JSON.parse(fileContent);
          const updatedCart = { ...JSON.parse(fileContent) };

          //find the product to be removed from the array:
          const product =  updatedCart.products.find(item =>
            item.id === id);
          
          //check if the product we are trying to delete is not
          //in the cart, don't continue with the code below:
          if(!product) { 
            return;
          }
          //find what the quantity is from product:
          const productQty = product.qty;

          //returning array except the removed item:
          updatedCart.products = updatedCart.products.filter(item => 
            item.id !== id);  

          //to calculate total price after deleting an item:
          const parseProductPrice = parseFloat(productPrice)
          updatedCart.totalPrice = updatedCart.totalPrice.toFixed(2) - parseProductPrice * productQty;
          
          //save changes to file:
          fs.writeFile(p, JSON.stringify(updatedCart), err => {
            console.log(err);
          });     
        })
      }
      
    //show cart in /cart:
      static getCart(cb) {
        //read file:
        fs.readFile(p, (err, fileContent) => {
          //cart:
          const cart = JSON.parse(fileContent);

          if(err) {
            cb(null)
          }
          else {
            //returning the cart in the callback:
          cb(cart);
          }
         
        });
      }
};

