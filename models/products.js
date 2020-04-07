//imports:
const db = require("../util/database");

const Cart = require("./cart");


module.exports = class Product {
     constructor(id, title, price, description, imageUrl) {
          this.id = id;
          this.title = title; 
          this.price = price;
          this.description = description;  
          this.imageUrl = imageUrl;      
     };
     
     save() {
          return db.execute(
               "INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)",
               [this.title, this.price, this.description, this.imageUrl]
               );
     };

    
//fetching db from MYSQL DB:
     static fetchAll() {
          return db.execute(
               "SELECT * FROM products order by id"
               );   
     };

     static findById(id) { 
          return db.execute(
               "SELECT * FROM products WHERE products.id = ?", [id]
          );
     };

     static deleteById(id) {
          return db.execute(
               "delete from products where products.id = ?", [id]
          );
     };
};
