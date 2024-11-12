const { Sequelize, DataTypes } = require('sequelize');
const db = require("../config/dbConfig");

    const Player = db.define("player", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: "player_id"
        },
        longName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "long_name"
        },
        playerPosition: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "player_positions"
        },
        overall:{ 
            type: DataTypes.INTEGER
        },
        potential: {
            type: DataTypes.INTEGER
        },
        valueEur:{
            type: DataTypes.INTEGER,
            field: "value_eur"
        },
        wageEur:{
            type: DataTypes.INTEGER,
            field: "wage_eur"
        },
        dob:{
           type: DataTypes.DATE
        },
        height:{
            type: DataTypes.INTEGER,
            field: "height_cm"
        },
        weight: {
            type: DataTypes.INTEGER,
            field: "weight_kg"
        },
        leagueName:{
            type: DataTypes.STRING,
            field: "league_name"
        },
        clubName:{
            type: DataTypes.STRING,
            field: "club_name"
        },
        nationalityName:{
            type: DataTypes.STRING,
            field: "nationality_name"
        },
        preferredFoot:{
            type: DataTypes.STRING,
            field: "preferred_foot"
        }

    },
    {
        tableName: "female_players"
    }
    )

    module.exports = Player;    
