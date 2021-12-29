const db = require("../models");
const Ordenes = db.Orders;
const Op = db.Sequelize.Op;

// Create and Save a new Productos
exports.create = (req, res) => {
  // ValOrderIDate request
  if (!req.body.OrdertName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Productos
  const ordenes = {
    OrderID: req.body.OrderID,
    OrdertName: req.body.OrdertName,
    OrdertDescription: req.body.OrdertDescription

  }

  // Save Productos in the database
  Ordenes.create(ordenes)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ordenes."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const OrdertName = req.query.OrdertName;
  var condition = OrdertName ? { OrdertName: { [Op.like]: `%${OrdertName}%` } } : null;

  Ordenes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};

// Find a single Productos with an OrderID
exports.findOne = (req, res) => {
  const OrderID = req.params.OrderID;

  Ordenes.findByPk(OrderID)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Productos with OrderID=" + OrderID
      });
    });
};

// Update a Productos by the OrderID in the request
exports.update = (req, res) => {
  const OrderID = req.params.OrderID;

  Ordenes.update(req.body, {
    where: { OrderID: OrderID }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Productos was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Productos with OrderID=${OrderID}. Maybe Productos was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Productos with OrderID=" + OrderID
      });
    });
};



