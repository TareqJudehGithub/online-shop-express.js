//importing class Product from /modules folder:
const Product = require("../models/products");

//admin routes:
exports.getAddProduct = (req, res, next) => {

     //EJS 2. render:
      res.render(
           "admin/add-product.ejs",
           {  
               pageTitle: "Add Product",  
               path: "/admin/add-product" 
          });
 };

 exports.postAddProduct = (req, res, next) => {

     const title = req.body.title;
     const imageUrl = req.body.imageUrl;
     const price = req.body.price;
     const description = req.body.description;
     
     const product = new Product(title, imageUrl, price, description);
 
     product.save(); //this will call the save() we defined in /models/products.
     res.redirect("/");
  };
 
  exports.getAdminProducts = (req, res, next) => {
       Product.fetchAll(products => {
            res.render(
                 "admin/products.ejs",
                 {
                    pageTitle: "Admin Products",
                    path: "/admin/products",
                    prods: products
                 });
       });
  };