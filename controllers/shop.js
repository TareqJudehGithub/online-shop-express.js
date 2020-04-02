//importing class Product from /modules folder:
const Product = require("../models/products");

//users routes:
exports.getProducts = (req, res, next) => {
     
     //to fetch/get all products:
     Product.fetchAll((products) => {
          res.render(
               "shop/product-list.ejs",
               {
                    prods: products,
                    pageTitle: "Products List", 
                    path: "/products"
               }); 
     }); 
};

 exports.getIndex = (req, res, next) => {
     Product.fetchAll(products => {
          res.render(
               "shop/index.ejs",
               {
                    pageTitle: "Shop",
                    path: "/",
                    prods: products
               });
     });
     
 };

 exports.getCart = (req, res, next) => {
      res.render(
           "shop/cart.ejs",
           {
               pageTitle: "Cart",
               path: "/cart",     
           })
 };
 exports.getOrders = (req, res, next) => {
     res.render(
          "shop/orders.ejs",
          {
              pageTitle: "Orders",
              path: "/orders",     
          })
};
 exports.getCheckout = (req, res, next) => {
     res.render(
          "shop/checkout.ejs",
          {
              pageTitle: "Checkout",
              path: "/checkout",     
          })
}

 
 
 