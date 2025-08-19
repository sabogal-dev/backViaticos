import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Importar rutas
import usuarioRoutes from "./routes/usuario.js";
import categoriaRoutes from "./routes/categoria.js";
import gastoRoutes from "./routes/gasto.js";
import consultarRoutes from "./routes/consultar.js"

app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/gastos", gastoRoutes);
app.use("/consultar", consultarRoutes)


app.get("/", async (req, res) => {
    res.send("funcionando")
})

app.listen(3000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:3000");
});
