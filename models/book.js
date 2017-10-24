var mongoose = require("mongoose");

// Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: false
    },
    pages:{
        type: String,
        required: false
    },
    image_url:{
        type: String,
        required: true
    },
    buy_url:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// get Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
}

// get Book By Id
module.exports.getBookById = function (id, callback) {
    Book.findById(id,callback);
}

// add Book
module.exports.addBook = function (book,callback) {
    Book.create(book,callback);
}

// update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = {_id:id};
    var update = {
        title: book.title,
        author: book.author
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// delete Book
module.exports.deleteBook = function (id,callback) {
    var query = {_id:id};
    Book.remove(query,callback);
}