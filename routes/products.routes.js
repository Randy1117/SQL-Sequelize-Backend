module.exports = app => {
  const Products = require("../controllers/products.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Products.create);

  // Retrieve all Products
  router.get("/", Products.findAll);

  // Retrieve a single Tutorial with ProductID
  router.get("/:id", Products.findOne);

  // Update a Tutorial with id
  router.put("/:id", Products.update);

  app.use('/api/Products', router);
};