const express = require('express');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();
const port = process.env.PORT || 8000;

// Create a Redis client
const redisClient = redis.createClient();

// Use the session middleware with Redis as the store
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'Q3RedisFileSession',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true in production if using HTTPS
  })
);

// Define a route to handle login
app.get('/login', (req, res) => {
  // Simulate a login by setting a session variable
  req.session.username = 'exampleuser';
  res.send('Logged in successfully!');
});

// Define a protected route
app.get('/dashboard', (req, res) => {
  if (req.session.username) {
    res.send(`Welcome, ${req.session.username}!`);
  } else {
    res.redirect('/login');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
