const sequelize = require('./config/dbConfig');
const express = require("express");
const cors = require("cors");
const db = require("./models")
const Role = db.role;
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');

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
app.use('/auth', require('./routes/auth'));

//Error handler
app.use(errorHandler);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fifa players application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  //initiate database
  await db.sequelize.sync().then(()=>{
    //initial();
  });
  console.log(`Server is running on port ${PORT}.`);
});


function initial(){
  Role.create({
      id: 1,
      name: "USER"
  });
  
  Role.create({
      id: 2,
      name: "ADMIN"
  });
  
  Role.create({
      id: 3,
      name: "PM"
  });
}
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