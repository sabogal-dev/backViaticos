import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Consulta Personalizada
router.post("/", async (req, res) => {
    const { modelo, campos } = req.body;

    if (!campos) {
        try {
            const user = await prisma[modelo].findMany()
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
        return
    }

    try {
        const user = await prisma[modelo].findMany({
            where: campos,
        })
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

});

export default router;
