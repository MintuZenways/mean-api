module.exports = (app) => {

var products =  require("../controllers/product.controller");
var router = require('express').Router();

router.post("/", products.create);
router.get("/", products.getProducts);

app.use("/products", router);

}