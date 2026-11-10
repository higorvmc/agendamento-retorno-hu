import { Navigate, Outlet } from "react-router-dom";
import { homeByPerfil } from "../config/menus";
import { useAuth } from "../contexts/AuthContext";
import type { Perfil } from "../types";

// Só deixa passar quem está logado com o perfil exigido.
export default function ProtectedRoute({ perfil }: { perfil: Perfil }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (user.perfil !== perfil) {
    return <Navigate to={homeByPerfil[user.perfil]} replace />;
  }
  return <Outlet />;
}
