import './DashboardMemberBody.css';
import { useState } from 'react';
import VisaoGeral from './VisaoGeral';
import GestaoConteudo from './GestaoConteudo';



export default function DashboardAdminBody() {
  const [visaoGeral, setVisaoGeral] = useState(true);
  const [gestaoConteudo, setGestaoConteudo] = useState(false);
  const [minhaConta, setMinhaConta] = useState(false);
  const nomeCompleto = localStorage.getItem('nomeCompleto');
  const primeiroNome =nomeCompleto? nomeCompleto.split(' ')[0]: '';
  const primeiraLetra = primeiroNome.charAt(0).toUpperCase();
  const ultimoNome =nomeCompleto? nomeCompleto.split(' ')[nomeCompleto.split(' ').length - 1]: '';


  const handleVisaoGeral = (e) => {
    e.preventDefault();
    setVisaoGeral(true);
    setGestaoConteudo(false);
    setMinhaConta(false);
  }

  const handleGestaoConteudo = (e) => {
    e.preventDefault();
    setVisaoGeral(false);
    setGestaoConteudo(true);
    setMinhaConta(false);
  }

  const handleMinhaConta = (e) => {
    e.preventDefault();
    setVisaoGeral(false);
    setGestaoConteudo(false);
    setMinhaConta(true);
  }

  return (
    <div className="dashboard-container">
      <aside className="dashboard-aside">
        <div className="dashboard-aside-title">
          <div className="dashboard-aside-title-logo">
            {primeiraLetra}
          </div>
          <div className='dashboard-aside-title-content'>
            <strong>Dr(a) {primeiroNome} {ultimoNome}</strong>
            <span>Membro</span>
          </div>
        </div>
        <nav className="dashboard-aside-nav">
          <a href="#" onClick={handleVisaoGeral} className={`dashboard-aside-nav-a ${visaoGeral ? "amareloActive" : "amareloDesactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <p>Visão Geral</p>
          </a>
          <a href="#" onClick={handleGestaoConteudo} className={`dashboard-aside-nav-a ${gestaoConteudo ? "amareloActive" : "amareloDesactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <path d="M4 8h16"></path>
              <path d="M8 14h8"></path>
              <path d="M8 18h8"></path>
            </svg>            
            <p>Gestão de Conteúdo</p>
          </a>
          <a href="#" onClick={handleMinhaConta} className={`dashboard-aside-nav-a ${minhaConta ? "amareloActive" : "amareloDesactive"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21 2-9.6 9.6"></path>
              <circle cx="7.5" cy="15.5" r="5.5"></circle>
              <path d="m15.5 7.5 2.3 2.3"></path>
              <path d="m19 4 2.1 2.1"></path>
            </svg>
            <p>Minha Conta</p>
          </a>
        </nav>
        
      </aside>
      <main className="dashboard-main">
        {visaoGeral && <VisaoGeral />} 
        {gestaoConteudo && <GestaoConteudo />}     
      </main>
    </div>
  );
}