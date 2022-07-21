const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoute)

//MongoDB connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.rteky.mongodb.net/?retryWrites=true&w=majority', (even)=>{
    console.log("Connected to MongoDB");
}).catch( (err) =>{
    console.log(err);
})

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})