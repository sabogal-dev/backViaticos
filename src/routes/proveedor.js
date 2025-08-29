import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear proveedor
router.post("/", async (req, res) => {
    const { nit, nombre, categoriaIds } = req.body;
    // categoriaIds sería un array de IDs, ej: [1, 2, 3]
    try {
        const proveedor = await prisma.proveedor.create({
            data: {
                nit,
                nombre,
                categoria: {
                    connect: categoriaIds.map(id => ({ id })) // <- conecta el proveedor con la categoría
                }
            },
        });
        res.json(proveedor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { nit, nombre } = req.body;
    try {
        const updatedProveedor = await prisma.proveedor.update({
            where: { id: parseInt(id) },
            data: { nit, nombre },
        });
        res.json(updatedProveedor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar usuario
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.proveedor.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: "proveedor eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar proveedor con gastos asociados
router.get("/", async (req, res) => {
    const proveedor = await prisma.proveedor.findMany({
        include: { gastos: true },
    });
    res.json(proveedor);
});

export default router;
