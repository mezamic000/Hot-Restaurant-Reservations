//required libraries
var express = require('express');
var path = require('path');

//required for express to run
var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
//Tables Array
var tables = [
    {
       name: "Ashley", 
       phone: "555-555-5555",
       email: "ashley@example.com",
       id: "ashley-01"
    },
    {
        name: "Michelle", 
        phone: "555-555-5555", 
        email: "michelle@example.com",
        id: "michelle-01"
    },
    {
        name: "Tashona",
        phone: "555-555-5555",
        email: "tashona@example.com",
        id: "tashona-01"
    }
]
=======
//tables array
>>>>>>> 8af9cb3cac970bfa41031e7e47f060efff1e80c6

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});