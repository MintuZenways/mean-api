var db = require("../models/index");
var Product = db.products;

exports.create = (req, res) =>{
    if(!req.body.name) {
        res.status(400).send({ message: "Name can not be empty"});
    } else if(!req.body.brand) {
        res.status(400).send({ message: "Brand name can not be empty"});
    }
    else if(!req.body.model) {
        res.status(400).send({ message: "Model can not be empty"});
    }
    else if(!req.body.price) {
        res.status(400).send({ message: "Price can not be empty"});
    }
    else if(!req.body.quantity) {
        res.status(400).send({ message: "Quantity can not be empty"});
    }    
    
    else {
    let product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        quantity: req.body.quantity
    });
    product.save(product).then((data) =>{
        res.send({ data: data, message: "Saved successfully"});
    }).catch((err) =>{
        res.status(400).send({ message: "Error", err: err});
    })
    }
}

exports.getProducts = (req, res) =>{
    Product.find().then((data)=>{
        res.send(data);
    }).catch((err) =>{
        res.status(400).send({error: err});
    });
}