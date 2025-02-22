const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the 'src' folder (where 2a.html is)
app.use(express.static(path.join(__dirname, "src")));

// Route for serving index.html or any other endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Node app!");
});

// Your server is running at localhost:3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
