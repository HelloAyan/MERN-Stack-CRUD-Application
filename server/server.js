const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})