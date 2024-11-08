module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      name: {
          type: Sequelize.STRING
      },
      username: {
          type: Sequelize.STRING,
          unique: true
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
          isEmail: true
      },
      password: {
          type: Sequelize.STRING,
         /* validate: {
            is: /^[0-9a-f]{64}$/i,
          }
            */
      }
    });
    
    return User;
}
