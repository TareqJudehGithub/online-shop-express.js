const express = require("express");
const path = require("path");
const router = express.Router();
const rootDire = require("../util/path");

//array (to store items)
const products = [];

router.get("/add-product", (req, res, next) => {
     res.sendFile(path.join(rootDire , "/views", "/add-product.html"));
});

router.post("/add-product", (req, res, next) => {
     //creating new obj title
     products.push({ title: req.body.title });
     res.redirect("/");
});

// exports.routes = router;
// exports.products = products;

module.exports = {
     routes: router,
     products: products
}