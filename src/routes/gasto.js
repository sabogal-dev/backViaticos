import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear gasto
router.post("/", async (req, res) => {
    const { titulo, descripcion, monto, fecha, categoriaId, usuarioId, subcategoriaId, proveedorId, imagen } = req.body;
    try {
        const gasto = await prisma.gasto.create({
            data: { titulo, descripcion, monto, fecha, categoriaId, usuarioId, subcategoriaId, proveedorId, imagen },
        });
        res.json(gasto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar gastos con categoría y usuario
router.get("/", async (req, res) => {
    const gastos = await prisma.gasto.findMany({
        include: {
            categoria: true,
            usuario: true,
        },
    });
    res.json(gastos);
});

export default router;
