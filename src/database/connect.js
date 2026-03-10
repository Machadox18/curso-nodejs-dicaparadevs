const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@users.lvdrazv.mongodb.net/database?appName=Users`,
    );

    console.log("✅ Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log(
      "❌ Ocorreu um erro ao se conectar com o banco de dados:",
      error,
    );
  }
};

module.exports = connectToDatabase;
