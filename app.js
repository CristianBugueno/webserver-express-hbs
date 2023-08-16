const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const path = require('path'); // Importa el módulo 'path'


const app = express();
const port = process.env.PORT;

// Define la ubicación de las vistas y los parciales
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Configura el motor de vistas Handlebars
app.set('view engine', 'hbs');

// Servir contenido estático
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Cristian Bugueño',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        nombre: 'Cristian Bugueño',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', function(req, res) {
    res.render('elements', {
        nombre: 'Cristian Bugueño',
        titulo: 'Curso de Node'
    });
});

app.get('*', function(req, res) {
    res.status(404).send('404 | Page not found'); // Devuelve una respuesta con código 404
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`);
});
