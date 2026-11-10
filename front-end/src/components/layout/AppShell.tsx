import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { menuByPerfil, perfilLabel } from "../../config/menus";
import { useAuth } from "../../contexts/AuthContext";

// Moldura das telas internas: menu lateral + barra superior + conteúdo.
// O menu muda conforme o perfil do usuário logado.
export default function AppShell() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();

  if (!user) return null;

  const menu = menuByPerfil[user.perfil];
  const titulo = menu.find((item) => item.to === pathname)?.label ?? "";

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <span className="sidebar__brand">HU-UFGD</span>
        <span className="sidebar__subtitle">Retorno Ambulatorial</span>
        {menu.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "sidebar__link" + (isActive ? " sidebar__link--active" : "")
            }
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/login" onClick={logout} className="sidebar__link sidebar__link--logout">
          Sair
        </Link>
      </aside>

      <main>
        <header className="topbar">
          <h1 className="topbar__title">{titulo}</h1>
          <span className="topbar__user">
            {user.nome}
            <small className="topbar__role">{perfilLabel[user.perfil]}</small>
          </span>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
