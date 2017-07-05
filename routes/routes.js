const express = require('express');
const router = express.Router();
const models = require('../models');



router.get('/', function(req, res) {
   //  req.session.errors = null;
   //  req.session.success = null;
    res.render('login', {title: 'Validation', success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
    req.session.success = null;
});


router.post('/login', function(req, res, next){
    req.check('username', 'Invalid username').isLength({min: 6});
    req.check('password', 'Invalid password').isLength({min: 4}).equals(req.body.confirmPassword);

    var errors = req.validationErrors();
    if (errors) {
      req.session.errors = errors;
      req.session.success = false;
   } else {
      req.session.success = true;
   }
   res.redirect('/');
});




module.exports = router;
