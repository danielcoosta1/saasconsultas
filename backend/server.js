import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
/* global process */

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

prisma.$connect()
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  });

// Teste de conexão
app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando 🚀" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

