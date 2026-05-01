import React from 'react';
import './GestaoConteudo.css';
import DashboardHeader from '../utils/DashboardHeader';


export default function GestaoConteudo() {
  return (
    <div className='gestao-conteudo'>
      <DashboardHeader />
      <section className='gestao-conteudo-content'>
        <div className='gestao-conteudo-content-title'>
          <h1>MEU VLOG</h1>
        </div>
        <hr className='linha-divisoria'/>
        <div className='gestao-conteudo-content-addvlog'>
          <h2>GESTÃO DE POSTAGENS DE VLOG</h2>
          <a href="#"><span>+ </span>Novo Registro</a>
        </div>
      </section>
    </div>
  );
}