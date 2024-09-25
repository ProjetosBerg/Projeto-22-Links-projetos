const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: 'https://projeto-22-links-projetos-backend-8c10jgf92.vercel.app/' }));

app.use(express.json());


require("./db/conn");

const port =  3000;

const memoryRoutes = require("./routes");

app.use("/repositories", memoryRoutes);

app.get('/', (req, res) => {
    return res.json("Hello word")
})

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
})