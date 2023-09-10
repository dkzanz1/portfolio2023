// backend/server.js

const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
// const { json } = require('body-parser');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


app.post("/api/contact", (req, res) => {
  
  const jsonData = req.body;
    // Using send function we send
    // response to the client
    // Here we are sending html
  console.log(jsonData)
  
  // Send a response if necessary
  
  res.status(200).json({ message: 'Data received successfully'});
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
