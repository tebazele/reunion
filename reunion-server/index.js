require('dotenv').config();



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const mongoString = process.env.CONNECTION_STRING;
const routes = require('./routes/routes');



app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`Server started at ${3000}`)
})

app.use('/api', routes);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected')
})

