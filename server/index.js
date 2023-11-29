require('dotenv').config();

const cron = require('node-cron');
const express = require('express')
const mongoose = require('mongoose');

const app = express();
const port = 3000;

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

mongoose.connect(`${process.env.MONGO_URI}`, {});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

app.get('/', (_, res) => {
  res.send('Hello World!')
})

// Define a route to get all users
app.get('/users', async (_, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});