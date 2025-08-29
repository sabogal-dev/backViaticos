import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";
import cors from 'cors';
import multer from "multer";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Importar rutas
import usuarioRoutes from "./routes/usuario.js";
import categoriaRoutes from "./routes/categoria.js";
import gastoRoutes from "./routes/gasto.js";
import subcategoriaRoutes from "./routes/subcategoria.js"
import proveedorRoutes from "./routes/proveedor.js"
import consultarRoutes from "./routes/consultar.js"

app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/subcategorias", subcategoriaRoutes);
app.use("/proveedor", proveedorRoutes);
app.use("/gastos", gastoRoutes);
app.use("/consultar", consultarRoutes)


app.get("/", async (req, res) => {
    res.send("funcionando")
})

// Configuración de multer para guardar archivos
const storage = multer.diskStorage({
  destination: "uploads/", // Carpeta donde se guardan
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname /* path.extname(file.originalname) */); // nombre único
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("imagen"), (req, res) => {
  res.json({
    mensaje: "Imagen subida correctamente",
    url: `/uploads/${req.file.filename}`,
  });
});

app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
    console.log("🚀 Servidor corriendo en http://localhost:3000");
});
