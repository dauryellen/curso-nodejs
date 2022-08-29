const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});

// try {
//   sequelize.authenticate();

//   console.log("Conexão com o Sequelize bem sucedida.");
// } catch (err) {
//   console.log("Não foi possível conectar: ", err);
// }

module.exports = sequelize;