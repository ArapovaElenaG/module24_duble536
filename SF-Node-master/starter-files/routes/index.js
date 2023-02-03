const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ура! Первая!');
});

process.on('unhandledRejection', (...args) => console.error(...args));

module.exports = router;
