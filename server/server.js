const express = require('express');
const app = express();
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5001;

const bodyParser = require('body-parser'); // delete this maybe

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // delete this maybe
app.use(express.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
  console.log('Listening on port: ', PORT);
});
