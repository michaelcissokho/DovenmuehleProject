const express = require('express');
const router = express.Router();
const strings = [];

router.get('/', (req, res, next) => {
  try {
    return res.status(200).json({ strings });
  } catch (err) {
    return next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    strings.unshift(req.body.newString);
    return res.status(201).json({ strings });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
