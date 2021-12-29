var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var cors = require('cors');
var app = express(); 
 
var corsOptions = {
  origin: "http://localhost:0000"
};

// Body Parser Middleware
app.use(cors(corsOptions));
app.use(cors());
 
//Setting up server
 var server = app.listen(process.env.PORT || 0000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 
//Initializing connection string
var dbConfig = {
  user:  "root",
  password:",
  server: "0000.0000.0000.0000",
  database: "PRUEBAS"
};

//GET API
app.get("/api/v1/tutorials", function(req , res){
	gettutorials()
});
function gettutorials() {
    var dbConn = new sql.ConnectionPool(dbConfig);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from tutorials").then(function (resp) {
            console.log(resp);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
}