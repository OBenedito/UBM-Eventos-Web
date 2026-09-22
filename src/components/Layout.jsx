import { NavLink, Outlet } from "react-router";
import Header from "./Header";
import Rodape from "./Rodape";

function Layout() {
  return (
    <>
      <Header />
      <nav className="app-nav">
        <NavLink to="/" end>Eventos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
      <Outlet />
      <Rodape />
    </>
  );
}

export default Layout;