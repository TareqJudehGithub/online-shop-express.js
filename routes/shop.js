const express = require("express");
const path = require("path");
const router = express.Router();   

const adminData =require("./admin");

//routes
router.get("/",(req, res, next) => {
   const products = adminData.products;

    //pug 80.3
    //The render method:
    //rendering the shop.pug file in views folder, using
    // the default templating engine (PUG) and then return (renders) that.
    res.render("shop", {prods: products, pageTitle: "Shop", path: "/"} ); //81.1

});

module.exports = router;