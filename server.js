//core modules
const path = require("path");

//Express Server setup
const express = require("express");

const app = express();

//pug 80.1

app.set("view engine", "pug");
app.set("views", "views");

//Routes:
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded( {extended: false }));

//static files path: to grant access to other folders:
app.use(express.static(path.join(__dirname, "/public")));

//end-points:
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//Error page not found for undefined routes.
app.use("/",(req, res, next) => {
     //83.3
     res.status(404).render("404");
});

app.listen(4000, () => {
     app.listen()
     ?
     console.log("Server is up and running on PORT 4000!")
     :
     console.log("Error starting Express server.")
});