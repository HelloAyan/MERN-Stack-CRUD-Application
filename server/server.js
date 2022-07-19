const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/books', booksRoute)

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})