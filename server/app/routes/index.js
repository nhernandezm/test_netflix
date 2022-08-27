var router = require('express').Router();
var category = require('./category');
var content = require('./content');
var user = require('./user');
var login = require('./login');
var load = require('./load');

router.use('/category', category);
router.use('/content', content);
router.use('/user', user);
router.use('/login', login);
router.use('/load', load);

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
});

module.exports = router