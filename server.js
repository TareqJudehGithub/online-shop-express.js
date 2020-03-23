//core modules
const path = require("path");

//Express Server setup
const express = require("express");

const app = express();

//Routes:
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded( {extended: false }));

//end-points:
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Error page not found for undefined routes.
app.use("/",(req, res, next) => {
     res.status(404).sendFile(
          path.join(__dirname, "/views", "/404.html")
     );
});

app.listen(4000, () => {
     app.listen()
     ?
     console.log("Server is up and running on PORT 4000!")
     :
     console.log("Error starting Express server.")
});