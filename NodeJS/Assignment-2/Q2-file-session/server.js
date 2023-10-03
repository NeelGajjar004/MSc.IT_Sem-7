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
    secret: 'your-secret-key', // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 604800000, // Session expires in 7 days (milliseconds)
    },
  })
);

// Sample user data (you should use a database in production)
const users = [
  {
    id: 1,
    username: 'user1',
    password: 'password1', // Plain text password (for demonstration only)
  },
  {
    id: 2,
    username: 'user2',
    password: 'password2', // Plain text password (for demonstration only)
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
















// const express = require('express');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
// const bcrypt = require('bcrypt');

// const app = express();

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Configure session
// app.use(
//   session({
//     store: new FileStore(), // Store sessions in files
//     secret: 'your-secret-key', // Change this to a strong secret
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       maxAge: 604800000, // Session expires in 7 days (milliseconds)
//     },
//   })
// );

// // Sample user data (you should use a database in production)
// const users = [
//   {
//     id: 1,
//     username: 'user1',
//     password: '$2b$10$N.E44NE7E9WAhPzLlfmjHuq0w9Uss7j9s8KRcCxL8rWTXMM3T/6X6', // Hashed password: "password1"
//   },
//   {
//     id: 2,
//     username: 'user2',
//     password: '$2b$10$jg/tH7C0sMEIjpMwR4D20u4ulK3ZT3Nz29BJB/B7rdVd2NgtQ9V9a', // Hashed password: "password2"
//   },
// ];

// // Routes

// // Display the login form
// app.get('/login', (req, res) => {
//   res.send(`
//     <form method="post" action="/login">
//       <label for="username">Username:</label>
//       <input type="text" id="username" name="username" required><br>
//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required><br>
//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// // Handle login submission
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username);

//   if (user && bcrypt.compareSync(password, user.password)) {
//     req.session.user = user;
//     res.send(`Welcome, ${user.username}! <a href="/logout">Logout</a>`);
//   } else {
//     res.send('Invalid username or password. <a href="/login">Try again</a>');
//   }
// });

// // Logout
// app.get('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error(err);
//     }
//     res.redirect('/login');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
