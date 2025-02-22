const express = require("express");
const path = require("path");
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

// Set up a route for the home page (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/test.html"));
});

// Catch-all route for other HTML files
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, `../public/${page}.html`);

  // Check if the requested HTML file exists
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("Page not found");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
