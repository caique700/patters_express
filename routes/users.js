var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')

/* GET users listing. */
router.get('/list', function(req, res, next) {
  UserController.getAll(req,res)
});

/* GET users listing. */
router.post('/create', function(req, res, next) {
  UserController.create(req,res)
});

module.exports = router;
