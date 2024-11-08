

    const controller = require('../controllers/user');
    const router = require('express').Router();

    router.post('/signup', controller.signup);
    
    router.post('/signin', controller.signin);
    
    module.exports = router;
