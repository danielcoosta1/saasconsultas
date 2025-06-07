import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();


app.use(cors());
app.use(express.json());

// Teste de conexão
app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando 🚀" });
});

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
