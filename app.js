const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/topihernandezm', (req, res) => {
  res.render('primera', {title:"Bienvenido"});
});

app.get('/segunda', (req, res) => {
  res.send('segunda ruta');
});

app.get('/tercera', (req, res) => {
  res.send('tercera ruta');
});

app.get('/cuarta', (req, res) => {
  res.send('cuarta ruta');
});

app.listen(3000, () => console.log('Hi'));