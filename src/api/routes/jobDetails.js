const express = require('express');
const router = express.Router();

router.get('/jobs/:id', (req, res) => {
  res.json({
    companyName: 'Amazon',
    QA: [{ one: 'how ?' }, { two: 'why?' }],
  });
});

module.exports = router;
