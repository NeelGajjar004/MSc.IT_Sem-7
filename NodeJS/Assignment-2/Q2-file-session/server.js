const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure session
app.use(
  session({
    store: new FileStore(), // Store sessions in files
    secret: 'Q2FileSession', 
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000 , // Session expires in 1 days (milliseconds)
    },
  })
);

const users = [
  {
    id: 1,
    username: 'raj',
    password: 'raj@123', 
  },
  {
    id: 2,
    username: 'jay',
    password: 'jay@123', 
  },
];

// Routes

// Display the login form
app.get('/login', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle login submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && user.password === password) {
    req.session.user = user;
    res.send(`Welcome, ${user.username}! <a href="/logout">Logout</a>`);
  } else {
    res.send('Invalid username or password. <a href="/login">Try again</a>');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/login');
  });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});