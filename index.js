
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(bodyParser.json());

// Multiply route
app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  const result = +a * +b;
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
