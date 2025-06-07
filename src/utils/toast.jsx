// src/utils/toast.jsx
import { toast, Slide } from "react-toastify";
import React from "react";

// Toast de sucesso
export const toastSucesso = (mensagem) => {
  toast.success(mensagem, {
    icon: "✅",
    transition: Slide,
    style: {
      background: "#4BB543", // verde
      color: "#fff",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};

// Toast de erro
export const toastErro = (mensagem) => {
  toast.error(mensagem, {
    icon: "🚫",
    transition: Slide,
    style: {
      background: "#ff4d4f", // vermelho
      color: "#fff",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};

// Toast de informação
export const toastInfo = (mensagem) => {
  toast.info(mensagem, {
    icon: () =>
      React.createElement(
        "span",
        {
          style: {
            display: "inline-block",
            animation: "heartbeat 0.8s ease-in-out infinite",
            transformOrigin: "center",
          },
        },
        "ℹ️" // Ícone de informação
      ),
    transition: Slide,
    style: {
      background: "#4a90e2", // azul, para informação
      color: "#fff",
      fontSize: "16px",
    },
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });
};