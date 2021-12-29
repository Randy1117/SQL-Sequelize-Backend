const db = require("../models");
const Productos = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Productos
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ProductName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Productos
  const productos = {
    ProductName: req.body.ProductName
  }

  // Save Productos in the database
  Productos.create(productos)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Productos."
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const ProductName = req.query.ProductName;
  var condition = ProductName ? { ProductName: { [Op.like]: `%${ProductName}%` } } : null;

  Productos.findAll({ where: condition })
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

// Find a single Productos with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Productos.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Productos with id=" + id
      });
    });
};

// Update a Productos by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Productos.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Productos was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Productos with id=${id}. Maybe Productos was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Productos with id=" + id
      });
    });
};


