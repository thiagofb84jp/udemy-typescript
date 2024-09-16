// ENV Variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

//JSON Middleware
app.use(express.json());

// DB
import db from "../config/db";

// Router
import router from "./router";

// Logger
import Logger from "../config/logger";

app.use("/api/", router);

// App Port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
