const Player = require("../models/Player.model");

//CRUD controllers

//Get all players

exports.getPlayers = (req, res, next) => {
  Player.findAll()
    .then(players => {
      res.status(200).json({ players: players });
    }).catch(err => console.log(err));
}

//get player by id
exports.getPlayer = (req, res, next) => {
  const playerId = req.params.playerId;
  Player.findByPk(playerId)
    .then(player => {
      if (!player) {
        return res.status(404).json({ message: 'Player not found!' });
      }
      res.status(200).json({ player: player });
    })
    .catch(err => console.log(err));
}

//create user
exports.createPlayer = (req, res, next) => {
  const {longName, playerPosition, overall, potential, valueEur, 
    wageEur, dob, height, weight, leagueName, clubName, nationalityName,
    preferredFoot
  } = req.body;

  Player.create({
    longName, playerPosition, overall, potential, valueEur, 
    wageEur, dob, height, weight, leagueName, clubName, nationalityName,
    preferredFoot
  })
    .then(result => {
      console.log('Created Player');
      res.status(201).json({
        message: 'Player created successfully!',
        player: result
      });
    })
    .catch(err => {
      console.log(err);
    });
}

//update player
exports.updatePlayer = (req, res, next) => {
  const {playerId} = req.params;
  const {longName, playerPosition, overall, potential, valueEur, 
    wageEur, dob, height, weight, leagueName, clubName, nationalityName,
    preferredFoot
  } = req.body;
  Player.findByPk(playerId)
    .then(player => {
      if (!player) {
        return res.status(404).json({ message: 'Player not found!' });
      }
      const updated =  Player.update({longName, playerPosition, overall, potential, valueEur, 
        wageEur, dob, height, weight, leagueName, clubName, nationalityName,
        preferredFoot
      }, {where: { id: playerId } });
      return updated;
      })
    .then(result => {
      res.status(200).json({ message: 'Player updated!', player: result });
    })
    .catch(err => console.log(err));
}

//delete user
exports.deletePlayer = (req, res, next) => {
  const {playerId} = req.params;
  Player.findByPk(playerId)
    .then(player => {
      if (!player) {
        return res.status(404).json({ message: 'Player not found!' });
      }
      return Player.destroy({
        where: {
          id: playerId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Player deleted!' });
    })
    .catch(err => console.log(err));
}