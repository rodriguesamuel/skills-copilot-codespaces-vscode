// Create web server
// 1. Create an express application
// 2. Create a route for GET /comments
// 3. Return some comments as JSON
// 4. Listen on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { username: 'alice', content: 'I love apples' },
    { username: 'bob', content: 'Star Wars is my favorite movie' },
    { username: 'charlie', content: 'I like cats' },
  ]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});