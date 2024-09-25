const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@repository.dlack.mongodb.net/?retryWrites=true&w=majority&appName=Repository`);

    console.log(`Banco de Dados conectado com sucesso!`);
}

main().catch(err => console.log(err));

module.exports = main;