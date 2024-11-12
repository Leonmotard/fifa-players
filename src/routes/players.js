const controller = require('../controllers/playerController');
const authJwt = require('../providers/jwtTokenVerifier');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', authJwt.verifyToken, controller.getPlayers); // /players

router.get('/:playerId', authJwt.verifyToken, controller.getPlayer); // /players/:playerId

router.post('/', authJwt.verifyToken, controller.createPlayer); // /players

router.put('/:playerId', authJwt.verifyToken, controller.updatePlayer); // /players/:playerId

router.delete('/:playerId', controller.deletePlayer); // /players/:playerId

module.exports = router;