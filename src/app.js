const sequelize = require('./config/dbConfig');
const express = require("express");
const cors = require("cors");
const db = require("./models")

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//CRUD routes
app.use('/players', require('./routes/players'));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fifa players application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  //initiate database
  await db.sequelize.sync({ alter : true });
  console.log(`Server is running on port ${PORT}.`);
});


/*
async function  testConection()
{
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConection();
*/