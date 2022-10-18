import express from "express"
import { ContactController } from "./Controllers/ContactController";

export const routes = express.Router();


routes.get("/", async (req, res) => {
    return res.status(200).json({node:"mail system"});
});

routes.post("/contact", ContactController.sendMail)