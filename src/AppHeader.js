import { NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  function getNavClass(navLinkProps) {
    let navClass = 'app-header-item';
    if (navLinkProps.isActive) navClass += ' app-header-item-active';
    return navClass;
  }

  return (
    <header className="app-header">
      <NavLink className={getNavClass} to="/" end>Homepage</NavLink>
      <NavLink className={getNavClass} to="sample">Bisection</NavLink>
      <NavLink className={getNavClass} to="falseposition">Falseposition</NavLink>
      <NavLink className={getNavClass} to="newtonraphson">Newtonrapson</NavLink>
      <NavLink className={getNavClass} to="onepoint">Onepoint</NavLink>
      <NavLink className={getNavClass} to="secant">Secant</NavLink>
      <NavLink className={getNavClass} to="lagrange">Lagrange</NavLink>
      <NavLink className={getNavClass} to="spline">Spline</NavLink>
      <NavLink className={getNavClass} to="conjugate">Conjugate</NavLink>
      <NavLink className={getNavClass} to="cramer">Cramer</NavLink>
      <NavLink className={getNavClass} to="gauss">Gauss</NavLink>
      <NavLink className={getNavClass} to="jacobi">Jacobi</NavLink>
      <NavLink className={getNavClass} to="seidel">Seidel</NavLink>
      <NavLink className={getNavClass} to="polynomial">Polynomial</NavLink>
      <NavLink className={getNavClass} to="regression">Regression</NavLink>

    </header>
  );
}

export default AppHeader;