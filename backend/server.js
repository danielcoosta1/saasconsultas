import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis do arquivo .env

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import cadastroRouter from "./routes/cadastro.js";
import loginRouter from "./routes/login.js";
import recoverRouter from "./routes/recover.js";
import resetPasswordRouter from "./routes/reset-password.js";

/* global process */

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

prisma
  .$connect()
  .then(() => console.log("Conexão com o banco de dados estabelecida."))
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados:", error);
    process.exit(1);
  });

// Teste de conexão
app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando 🚀" });
});

// Montando as rotas de autenticação:
app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/recover", recoverRouter);
app.use("/reset-password", resetPasswordRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
