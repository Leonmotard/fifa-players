const controller = require('../controllers/playerController');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', controller.getPlayers); // /players

router.get('/:playerId', controller.getPlayer); // /players/:playerId

router.post('/', controller.createPlayer); // /players

router.put('/:playerId', controller.updatePlayer); // /players/:playerId

router.delete('/:playerId', controller.deletePlayer); // /players/:playerId

module.exports = router;