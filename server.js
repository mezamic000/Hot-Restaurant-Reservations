//required libraries
var express = require('express');
var path = require('path');

//required for express to run
var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

var waitlist = [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/tables", function(req, res) {
    res.json(tables)
});

app.get("/api/wait", function(req, res) {
    res.json(waitlist);
});

