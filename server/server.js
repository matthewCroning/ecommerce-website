const express       = require("express"),
      app           = express(),
      bcrypt = require ('bcrypt'),
      bodyParser    = require("body-parser");

const productsRoutes = require("./routes/products"),
      categoryRoutes = require("./routes/category"),
      productVariantRoutes = require("./routes/product_variant"),  
      productCategoryRoutes = require("./routes/product_category"),  
      authRoutes = require("./routes/auth");  

    
var mysqlConf = require("./config/config").mysql_pool;

const PORT = process.env.PORT || '3001';

app.use(bodyParser.json()); // use od body parser to get values from get req

app.use("/api/products/", productsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product_variant/", productVariantRoutes);
app.use("/api/product_category/", productCategoryRoutes);
app.use("/api/auth/", authRoutes);

app.listen(PORT, function(){
    console.log("Node server started on port " + PORT);
});
