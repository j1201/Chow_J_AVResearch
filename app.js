const express = require('express'); // import the express package
const app = express(); // create an express app

const port = process.env.PORT || 3001;

app.use(express.static('public'));

// this is a route handler -> listen for incoming requests and send back a response
// this is the root route -> expects to render an index page
app.get('/', (req, res) => {
    // this is pointing at index.html -> shared team page
  res.sendFile(__dirname + '/index.html');
});

app.get('/video', (req, res) => {
    // this is pointing at index.html -> shared team page
  res.sendFile(__dirname + '/video.html');
});

app.get('/audio', (req, res) => {
  // this is pointing at index.html -> shared team page
res.sendFile(__dirname + '/audio.html');
});

// set up the server to listen for incoming connections at this port
app.listen(port, () => {
  console.log(`listening on ${port}`);
});