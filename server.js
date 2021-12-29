const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:0000"
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/turorial.routes")(app);
require("./routes/products.routes")(app);

const db = require("./models");


const PORT = process.env.PORT || 0000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
