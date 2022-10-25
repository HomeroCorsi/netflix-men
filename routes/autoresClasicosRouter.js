const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('articles/index', { articles: articles })
    // res.render('../views/index')
    res.send('in articles')
  })

  // app.use(express.static(__dirname + '../views'));

module.exports = router;