//imports:
const Product = require("../models/products");
const Cart = require("../models/cart");

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
                    product: product,
                    pageTitle: product.title,
                    path: "/products"         
               });
          console.log(product.price);
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
 exports.postCart = (req, res, next) => {
     const prodId = req.body.Id;
     Product.findById(prodId, product => {
     Cart.addProduct(prodId, product.price);
     console.log(product.price);
      }); 
     res.redirect("/cart");
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

 
 
 