// routes/recover.js
import express from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
/* global process */
const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ erro: "E-mail não encontrado." });
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Simulação do envio de e-mail com o link de recuperação
    console.log(`Link de recuperação: http://localhost:5173/reset-password/${token}`);

    res.json({ mensagem: "E-mail de recuperação enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar recuperação:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

export default router;