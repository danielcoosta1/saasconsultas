// routes/reset-password.js
import express from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { verificarToken } from "../middlewares/authMiddleware.js"; // Importando o middleware

const router = express.Router();
const prisma = new PrismaClient();

// Agora usamos `verificarToken` para validar antes de atualizar a senha
router.post("/", verificarToken, async (req, res) => {
  const { senha } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    await prisma.usuario.update({
      where: { id: req.usuarioId }, // ID extraído pelo middleware
      data: { senha: senhaHash },
    });

    res.json({ mensagem: "Senha alterada com sucesso!" });
  } catch (error) {
    console.error("Erro na redefinição de senha:", error);
    res.status(500).json({ erro: "Erro interno ao redefinir senha." });
  }
});

export default router;