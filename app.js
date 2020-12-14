const express = require('express');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/home', (request, response) => {
  response.render(__dirname + '/views/home.hbs');
});

app.get('/works', (request, response) => {
  response.render(__dirname + '/views/works.hbs');
});

app.get('/about', (request, response) => {
  response.render(__dirname + '/views/about.hbs');
});

app.get('/photos', (request, response) => {
  response.render(__dirname + '/views/photos.hbs');
});

app.listen(3000);

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

/*app.get('/home', function (request, response) {
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
});*/
