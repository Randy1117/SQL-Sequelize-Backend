module.exports = app => {
  const Orders = require("../controllers/ordenes.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Orders.create);

  // Retrieve all Orders
  router.get("/", Orders.findAll);

  // Retrieve a single Tutorial with OrderID
  router.get("/:OrderID", Orders.findOne);

  // Update a Tutorial with OrderID
  router.put("/:OrderID", Orders.update);

  app.use('/api/Orders', router);
};

