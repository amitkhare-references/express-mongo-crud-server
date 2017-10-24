const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');

const db = mongoose.connection;

var Genre = require("./models/genre");
var Book = require("./models/book");

app.get("/",function (req, res) {
    res.send("use the /api endpoint gdg");
});

app.get("/api/genres",function (req, res) {
    Genre.getGenres(function (err, genres) {
        if(err){
            throw err;
        }
        res.json(genres);
    },10);
});

app.post("/api/genres",function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put("/api/genres/:_id",function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete("/api/genres/:_id",function (req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.get("/api/genres/:_id",function (req, res) {
    Genre.getGenreById(req.params._id,function (err, genre) {
        if(err){
            //res.json(err);
            throw err;
        }
        if(book){
            res.json(genre);
        }
    });
});

app.get("/api/books",function (req, res) {
    Book.getBooks(function (err, books) {
        if(err){
            throw err;
        }
        res.json(books);
    },10);
});

app.post("/api/books",function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if(err){
            //res.json(err);
            throw err;
        }
        res.json(book);
    });
});

app.put("/api/books/:_id",function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.delete("/api/books/:_id",function (req, res) {
    var id = req.params._id;
    Book.deleteBook(id, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.get("/api/books/:_id",function (req, res) {
    Book.getBookById(req.params._id,function (err, book) {
        if(err){
            //res.json(err);
            throw err;
        }
        if(book){
            res.json(book);
        }
    });
});

app.listen(8080, function () {
    console.log("running on port 8080");
});

