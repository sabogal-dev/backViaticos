import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear consignación
router.post("/", async (req, res) => {
    const { fecha, monto, concepto, comprobante, usuarioId } = req.body;
    try {
        const consignacion = await prisma.consignacion.create({
            data: { fecha, monto, concepto, comprobante, usuarioId },
        });
        res.json(consignacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar consignaciones con usuario
router.get("/", async (req, res) => {
    try {
        const consignaciones = await prisma.consignacion.findMany({
            include: {
                usuario: true,
            },
            orderBy: {
                fecha: 'desc'
            }
        });
        res.json(consignaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener consignaciones por usuario
router.get("/usuario/:usuarioId", async (req, res) => {
    const { usuarioId } = req.params;
    try {
        const consignaciones = await prisma.consignacion.findMany({
            where: { usuarioId: parseInt(usuarioId) },
            include: {
                usuario: true,
            },
            orderBy: {
                fecha: 'desc'
            }
        });
        res.json(consignaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
