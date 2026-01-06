const Example = require('../models/exampleModel');

// Get all examples
const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new example
const createExample = async (req, res) => {
  try {
    const { name, value } = req.body;
    const newExample = new Example({ name, value });
    const savedExample = await newExample.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getExamples, createExample };
