import express from "express";
import { routes } from "./routes"
import cors from "cors";
import "dotenv/config"

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => { console.log(`HTTP Server runing in port ${port}`) });