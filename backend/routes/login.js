import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
/* global process */

const router = express.Router();
const prisma = new PrismaClient();
router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ erro: "Usuário não encontrado." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }
    // Gerando Token
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      token,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

export default router;
