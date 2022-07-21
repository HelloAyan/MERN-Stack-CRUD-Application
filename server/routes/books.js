const express = require('express');
const router = express.Router();
const book = require('../models/book');

router.get('/', (req, res)=>{
    res.json({data: "Hello World"});
})

router.post('/', (req, res)=>{
    res.json({data: "Hello World POST"});
})

router.delete('/:id', (req, res)=>{
    res.json({data: "Hello World DELETE"});
})

router.patch('/:id', (req, res)=>{
    res.json({data: "Hello World PATCH"});
})

module.exports = router;