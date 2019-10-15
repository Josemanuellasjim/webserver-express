const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'josé manuel lascasas'
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'José Manuel Lascasas'
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});