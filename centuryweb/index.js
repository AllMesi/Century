const express = require('express');
const port = require('../data/conf').general.port;
var path = require('path');

express()
.set('view engine', 'ejs')
.set('views', path.join(__dirname, '/views'))
//for pc
.get('/', (req, res) => res.render(__dirname + '/views/pages/pc/index'))
.get('/cb', (req, res) => res.render(__dirname + '/views/pages/pc/botic'))
//for mobile
.get('/mobile', (req, res) => res.render(__dirname + '/views/pages/mobile/index'))
.get('/mobile/cb', (req, res) => res.render(__dirname + '/views/pages/mobile/botic'))
// other
.get('/favicon', (req, res) => {res.sendFile(__dirname + '/public/favicon.ico')})
.use(function(req, res, err) {res.status(500).render(__dirname + '/views/pages/500', {ERROR: err.message})})
.use(function(req, res){res.status(404).render(__dirname + '/views/pages/404', { url: req.url })})
.use('/static', express.static(__dirname + '/public'))
.listen(port, () => {console.log(`Website running on port ${port} `)});