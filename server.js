
const { auth } = require('express-openid-connect'); 
const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://supunityproduction.azurewebsites.net',
  clientID: 'h5gmUSnWPv3S0jMropNEJ5CT5KPl4bJn',
  issuerBaseURL: 'https://supunity.us.auth0.com'
};


const express = require("express");
const { join, resolve } = require("path");
const cors = require("cors");
const app = express();

//Auth router attaches /login /logout and /callback routes to the baseURL

app.use(auth(config)); 



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

app.get("/LoggedIn.html", requiresAuth(),  (_, res) => {
	
 
  res.sendFile(join(__dirname, "LoggedIn.html"));
});

// Send all other requests to ReactJS
app.use(express.static(resolve(__dirname, "client/build")));

app.get("*", (_, res) => {
  res.sendFile(resolve(__dirname, "client/build", "index.html"));
});

// Listen on port 3000
app.listen(8080, () => console.log("Application running on port 8080"));
