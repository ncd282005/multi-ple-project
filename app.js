  const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27018/todos');

app.use('/todos', todoRoutes);

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
