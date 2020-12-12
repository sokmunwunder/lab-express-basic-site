const express = require('express');
const app = express();

app.use(express.static('public'));

/*app.get('/home', function (request, response) {
  response.send('Testing');
});

app.get('/works', function (request, response) {
  response.send('Testing 1');
});

app.get('/about', function (request, response) {
  response.send('Testing 2');
});

app.get('/gallery', function (request, response) {
  response.send('Testing 3');
});*/

app.get('/home', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function (request, response) {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', function (request, response) {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000);
