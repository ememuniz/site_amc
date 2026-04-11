import './Header.css';
import logoAMC from '../assets/logo_amc2.png';
import { useState, useEffect } from 'react';

export default function Header() {
  //Opacidade, ela começa em 1 [totalmente sólido, sem transparência]
  const [bgAlpha, setBgAlpha] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Obtenha a posição vertical do scroll
      //Quando o scroll for zero, a opacidade é 1, à medida que o usuário rola para baixo, a opacidade diminui
      const opacity = Math.min(1, scrollY / 300); 
      // Se fosse o contrário deve ser: const opacity = Math.min(1, scrollY / 300); Assim varia de 1 para 0
      setBgAlpha(opacity); 
    }
    window.addEventListener('scroll', handleScroll); // Adicione o event listener ao scroll
    return () => window.removeEventListener('scroll', handleScroll); // Limpe o event listener quando o componente for desmontado
  }, []);

  return (
    <header className="navbar" style={{backgroundColor: `rgba(32, 27, 53, ${bgAlpha})`}}>
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