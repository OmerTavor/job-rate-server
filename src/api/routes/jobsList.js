const express = require('express');
const router = express.Router();

router.get('/jobs', (req, res) => {
  res.json({
    Google: 'aaaa',
    Appple: 'nan yu',
  });
});

module.exports = router;
