const express = require('express');
const Author = require('../models/author')

const router = express.Router();

router.post('', (req, res, next) => {
  const author = new Author({
    name: req.body.name
  });
  author.save().then(createdAuthor => {
    res.status(201).json({
      message: 'Author added successfully',
      postId: createdAuthor._id
    });
  });
});

router.put('/:id', (req, res, next) => {
  const author = new Author({
    _id: req.body.id,
    name: req.body.name
  })
  Author.updateOne({_id: req.params.id}, author).then(result => {
    res.status(200).json({message: 'Update successful!'})
  })
})


router.get('',(req, res, next) => {
  Author.find().then(documents => {
    res.status(200).json({
      message: 'posts fetched successfully!',
      authors: documents
    });
  });
});

router.get('/:id', (req, res, next) => {
  Author.findById(req.params.id).then(author => {
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({message: 'Author not found!'})
    }
  })
})

router.delete('/:id', (req, res, next) => {
  Author.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "author deleted!"})
  })
});

module.exports = router;
