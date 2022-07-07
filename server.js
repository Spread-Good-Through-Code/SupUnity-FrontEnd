const express = require("express");
const { auth } = require('express-openid-connect');

const { join } = require("path");
const app = express();


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'd0b535fba0f7bccff78705e419b094c38f84d405ce0f4bcda716f32813acc3cf',
  baseURL: 'https://www.abeliefnow',
  clientID: 'vk2gLLcmbUz3qtP5iAjhLBFD2I7aksuk',
  issuerBaseURL: 'https://dev-h-imm6ri.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));


// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});


// Listen on port 3000
app.listen(8080, () => console.log("Application running on port 8080"));
