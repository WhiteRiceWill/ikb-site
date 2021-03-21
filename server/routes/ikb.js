const express = require('express');
const router = express.Router();

router.get('/holders', async (req, res) => {
  try {
    return res.json(ikbHolders);
  } catch (err) {
    return res.status(422).json({ err: { msg: 'epic fail!' } });
  }
});

module.exports = router;