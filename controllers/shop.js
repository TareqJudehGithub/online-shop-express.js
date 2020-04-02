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
 exports.getProductById = (req, res, next) => {
  //* The name we use after params is the name we used
     //in the route in /routes/shop.js
     const prodId = req.params.id;
     Product.findById(prodId, product => {
          res.render(
               "shop/product-detail.ejs",
               {
                    productName: product,
                    pageTitle: product.title,
                    path: "/products"
                    
                    
               })
     });
 };
 exports.getIndex = (req, res, next) => {
     Product.fetchAll(products => {
          res.render(
               "shop/index.ejs",
               {
                    prods: products,
                    pageTitle: "Shop",
                    path: "/"
                    
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

 
 
 