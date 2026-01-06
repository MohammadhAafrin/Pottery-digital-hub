const express = require('express');
const router = express.Router();
const { getExamples, createExample } = require('../controllers/exampleController');

// Routes
router.get('/', getExamples);
router.post('/', createExample);

module.exports = router;
