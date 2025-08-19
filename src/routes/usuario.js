import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear usuario
router.post("/", async (req, res) => {
    const { nombre, clave, role } = req.body;
    try {
        const user = await prisma.usuario.create({
            data: { nombre, clave, role },
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { usuario, clave } = req.body;
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                nombre: `${usuario}`,
            },
        })
        if (clave == user.clave) {
            res.json({ id: user.id, role: user.role })
        }
        else {
            res.json({ error: "clave errada" })
        }
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar usuarios
router.get("/", async (req, res) => {
    const users = await prisma.usuario.findMany();
    res.json(users);
});

export default router;
