import './Header.css';
import logoAMC from '../assets/logo_amc2.png';

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo-area">
        <div className="logo-placeholder">
          <img className='logo-placeholder-img' src={logoAMC} alt="Logotipo da AMC" />
        </div>
        <div className="logo-text">
          <strong>AMC</strong>
          <span>Academia Maranhense de Ciências</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">A academia</a>
        <a href="#">Notícia</a>
        <a href="#">Membros</a>
        <a href="#">Publicações</a>
        <a href="#">Eventos</a>
      </nav>

      <button className="btn-portal-header">
        <svg width='16' height='16' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth='2' strokeLinecap="round" strokeLinejoin="round"><rect width='18' height='11' x='3' y='11' rx='2' ry='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/></svg>
        Portal de Membros
      </button>
    </header>
  )
}