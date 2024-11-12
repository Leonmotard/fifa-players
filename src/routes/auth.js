

    const controller = require('../controllers/user');
    const router = require('express').Router();

    router.post('/register', controller.signup);
    
    router.post('/login', controller.signin);
    
    module.exports = router;
