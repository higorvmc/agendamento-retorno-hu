import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { usuariosDemo } from "../mocks/data";
import type { Perfil, Usuario } from "../types";

type AuthContextValue = {
  user: Usuario | null;
  loginComo: (perfil: Perfil) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

// Login de demonstração: escolhe o perfil direto, sem consultar servidor.
// Com o back-end real, loginComo será trocado por uma chamada que envia
// CPF e senha e recebe o usuário (e o perfil) de volta.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);

  function loginComo(perfil: Perfil) {
    setUser(usuariosDemo[perfil]);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginComo, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
