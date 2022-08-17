const express = require("express");
const { join, resolve } = require("path");
const cors = require("cors");
const app = express();

// Enable CORS to add React routes
app.use(cors());
// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve the index page for all other requests
// app.get("/", (_, res) => {
//   res.sendFile(join(__dirname, "index.html"));
// });

app.get("/LoggedIn.html", (_, res) => {
  res.sendFile(join(__dirname, "LoggedIn.html"));
});

// Send all other requests to ReactJS
app.use(express.static(resolve(__dirname, "client/build")));

app.get("*", (_, res) => {
  res.sendFile(resolve(__dirname, "client/build", "index.html"));
});

// Listen on port 3000
app.listen(8080, () => console.log("Application running on port 8080"));
