const express = require('express');
const router = express.Router();
const book = require('../models/book');

router.get('/', (req, res)=>{
    book.find()
    .then((data) =>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    })
})

router.post('/', (req, res)=>{
    const books = new book({
        title: req.body.title,
        description: req.body.description
    });

    books.save()
    .then((data) =>{
        res.json(data);
    })
    .catch((err) =>{
        res.json({message: err});
    })
})

router.delete('/:id', (req, res)=>{
    book.deleteOne({_id: req.params.id})
    .then((data) =>{
        res.json(data);
    })
    .catch((err) =>{
        res.json({message: err})
    })
})

router.patch('/:id', (req, res)=>{
    book.updateMany({_id: req.params.id},
        {
           $set: {
            description: req.body.description,
            title: req.body.title
            }
        })

    .then((data) =>{
        res.json(data);
    })
    .catch((err) =>{
        res.json({message: err});
    })
})

module.exports = router;