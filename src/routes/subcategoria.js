import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear subcategoria
router.post("/", async (req, res) => {
    const { nombre, categoriaId } = req.body;
    try {
        const subcategoria = await prisma.subcategoria.create({
            data: { nombre, categoriaId },
        });
        res.json(subcategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Editar usuario
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, categoriaId } = req.body;
    try {
        const updatedSubcategoria = await prisma.subcategoria.update({
            where: { id: parseInt(id) },
            data: { nombre, categoriaId },
        });
        res.json(updatedSubcategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar usuario
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.subcategoria.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "Subcategoria eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar subcategoria con gastos asociados
router.get("/", async (req, res) => {
    const subcategoria = await prisma.subcategoria.findMany({
        include: { gastos: true },
    });
    res.json(subcategoria);
});

export default router;
