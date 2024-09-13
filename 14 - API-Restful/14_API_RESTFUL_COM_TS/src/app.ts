import express from "express";
import config from "config";

const app = express();

//JSON Middleware
app.use(express.json());

// Router
import router from "./router";

app.use("/api/", router);

// App Port
const port = config.get<number>("port");

app.listen(3000, async () => {
  console.log(`Aplicação está funcionando na porta: ${port}`);
});