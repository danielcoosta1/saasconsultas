import { localStorageService } from "../../services/localStorageService";


// Funções para recuperar itens salvos
const getUsuarioInicial = () => {
  return localStorageService.ler("usuario") || null;
};

const getTokenInicial = () => {
  return localStorageService.ler("token") || null;
};

export const initialState = {
  usuario: getUsuarioInicial(),
  token: getTokenInicial(),
};
