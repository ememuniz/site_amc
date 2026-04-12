import { useState, useEffect } from 'react';
import logoAMC from '../assets/logo_amc2.png';
import './Header.css';

export default function Header({ botaoAmarelo = true }) {
  //Opacidade, ela começa em 1 [totalmente sólido, sem transparência]
  const [bgAlpha, setBgAlpha] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; 
      const opacity = Math.min(1, scrollY / 300); 
      setBgAlpha(opacity); 
    }

    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <header 
    className="navbar" 
    style={{backgroundColor: isMenuOpen ? 'rgba(32, 27, 53, 1)': `rgba(32, 27, 53, ${bgAlpha})`}}
    >

      {/* LOGO */}
      <div className="logo-area">
        <div className="logo-placeholder">
          <img className='logo-placeholder-img' src={logoAMC} alt="Logotipo da AMC" />
        </div>
        <div className="logo-text">
          <strong>AMC</strong>
          <span>Academia Maranhense de Ciências</span>
        </div>
      </div>

      {/* BOTÃO DO HAMBURGUER */}
      <button 
      className='hamburger-btn' 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      aria-label='Menu'
      >
        {isMenuOpen ? 'x' : '☰'}
      </button>

      {/* LINKS DE NAVEGAÇÃO */}
      <div className={`nav-container ${isMenuOpen ? 'open' : ''}`}>
        <nav className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">A academia</a>
          <a href="#">Notícia</a>
          <a href="#">Membros</a>
          <a href="#">Publicações</a>
          <a href="#">Eventos</a>
        </nav>

        {/* BOTÃO DO PORTAL DE MEMBROS */}
        <button className={`btn-portal-header ${botaoAmarelo ? 'amarelo' : 'transparente'}`}>
          <svg width='16' height='16' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth='2' strokeLinecap="round" strokeLinejoin="round"><rect width='18' height='11' x='3' y='11' rx='2' ry='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/></svg>
          Portal de Membros
        </button>
      </div>
    </header>
  )
}