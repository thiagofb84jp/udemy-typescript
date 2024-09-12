import express from "express"
import config from "config";

const app = express();

//JSON Middleware
app.use(express.json());

app.listen(3000, async() => {
    console.log("Aplicação está funcionando na porta: 3000");
});