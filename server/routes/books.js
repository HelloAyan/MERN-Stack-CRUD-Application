const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({data: "Hello World"});
})

router.post('/', (req, res)=>{
    res.json({data: "Hello World POST"});
})

router.delete('/', (req, res)=>{
    res.json({data: "Hello World DELETE"});
})

router.patch('/', (req, res)=>{
    res.json({data: "Hello World PATCH"});
})

module.exports = router;