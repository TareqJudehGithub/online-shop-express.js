//importing class Product from /modules folder:
const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {

     //EJS 2. render:
      res.render("add-product.ejs",{  
           pageTitle: "Add Product",  
           path: "/admin/add-product" 
      });
 }

 exports.postAddProduct = (req, res, next) => {

    //.title: from add-product.ejs <input name="title"
    const product = new Product(req.body.title);

    product.save(); //this will call the save() we defined in /models/products.
    res.redirect("/");
 };

 exports.getProducts = (req, res, next) => {
     
     //to fetch/get all products:
     Product.fetchAll((products) => {
          res.render("shop", {
               prods: products,
               pageTitle: "Shop", 
               path: "/",
          }); 
     }); 
  };