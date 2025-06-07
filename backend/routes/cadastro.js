import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";
/* global process */
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(400).json({ erro: "E-mail já cadastrado." });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha: senhaHash },
    });
    // Gerando Token
    const token = jwt.sign({ id: novoUsuario.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      token
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

export default router;
