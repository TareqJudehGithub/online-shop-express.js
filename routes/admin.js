const express = require("express");
const path = require("path");
const router = express.Router();
const rootDire = require("../util/path");

//array (to store items)
const products = [];

router.get("/add-product", (req, res, next) => {
     //83.2 webpage title in the browser tab
     res.render("add-product",
     { pageTitle: "Add Product", path: "/admin/add-product" });
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