const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// Table name is called gallery
// Database name is react-gallery

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let likes = req.body.likes;

  if (!likes) {
    // If we don't get expected likes send back bad status
    res.sendStatus(500);
    return; // Do it now without running code below
  }

  let sqlText = `UPDATE gallery SET likes=$2 WHERE id=$1`;
  pool.query(sqlText, [idToUpdate, quantity])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    })
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY title;`;
  pool.query(sqlText)
      .then((result) => {
          console.log("Getting some stuff from the database!", result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database selection!!! ${sqlText}`, error);
          res.sendStatus(500);
      })
      
});

module.exports = router;
