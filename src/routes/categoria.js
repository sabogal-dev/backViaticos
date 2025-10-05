import express from "express";
import { PrismaClient } from "../generated/prisma/client.js";
const router = express.Router();
const prisma = new PrismaClient();

// Crear categoría
router.post("/", async (req, res) => {
  const { nombre } = req.body;
  try {
    const categoria = await prisma.categoria.create({
      data: { nombre },
    });
    res.json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Listar categorías
router.get("/", async (req, res) => {
  const categorias = await prisma.categoria.findMany({
    include: { gastos: true }, // 👈 trae los gastos asociados
  });
  res.json(categorias);
});

// Listar categorías sin gastos
router.get("/simple", async (req, res) => {
  const categorias = await prisma.categoria.findMany();
  res.json(categorias);
});

export default router;
