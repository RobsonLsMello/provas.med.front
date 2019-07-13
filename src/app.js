var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();
//Rotas
const index = require('./routes/index');
const login = require('./routes/loginRoute');
const cadastro = require('./routes/CadastroRoute');
const principal = require('./routes/principalRoute');
const suasProvas = require('./routes/suasProvasRoute');
const bancoQuestoes = require('./routes/bancoQuestoesRoute');
const criacaoProva = require('./routes/criacaoProvaRoute');
const fazerProva = require('./routes/fazerProvaRoute');
const responderProva = require('./routes/responderProvaRoute');
//const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/login', login);
app.use('/cadastro', cadastro);
app.use('/principal', principal);
app.use('/suasProvas', suasProvas);
app.use('/bancoQuestoes', bancoQuestoes);
app.use('/criacaoProva', criacaoProva);
app.use('/fazerProva', fazerProva);
app.use('/responderProva', responderProva);
//app.use('/persons', personRoute);
//apis
app.set('view engine', 'ejs');
app.set('layout', 'views/layout'); // defaults to 'layout'
app.set("layout extractScripts", true); 
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
//SETAR A PORRA DOS LINKS ESTATICOS
app.use(express.static('public'))
module.exports = app;