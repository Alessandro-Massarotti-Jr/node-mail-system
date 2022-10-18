import express from "express"

export const routes = express.Router();


routes.get("/", async (req, res) => {
    return res.status(200).json({node:"mail system"});
});