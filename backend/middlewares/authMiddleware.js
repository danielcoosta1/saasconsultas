// authMiddleware.js
import jwt from "jsonwebtoken";
/* global process */
export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ erro: "Acesso negado! Token ausente." });
  }

  const token = authHeader.split(" ")[1]; // Espera algo como "Bearer <token>"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuarioId = decoded.id; // Armazena o id do usuário para uso em outros lugares
    next();
  } catch (erro) {
    res.status(401).json({ erro: "Token inválido ou expirado." });
  }
};