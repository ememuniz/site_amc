import React from 'react'
import './VisaoGeral.css'


export default function VisaoGeral() {
  const hoje = new Date();

  const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(hoje);

  const dataISO = hoje.toISOString().split('T')[0];

  return (
    <div className='visao-geral'>
      <header className='visao-geral-header'>

        <div className='visao-geral-header-title'>
          <h1>Painel de Controle</h1>
          <p>Bem vindo, gerencie o conteúdo e informações da AMC</p>
        </div>

        <time datetime={dataISO} style={{ textTransform: 'capitalize' }}>{dataFormatada.toUpperCase()}</time>

      </header>

      <section className='visao-geral-generalinfo'>
        <div>
        </div>

        <div>
        </div>

        <div>
        </div>

        <div>
        </div>        
      </section>

      <section className='visao-geral-recentactivity'>
        <h1 className='visao-geral-recentactivity-title'>Atividades Recentes</h1>
        <div className='visao-geral-recentactivity-content'></div>
        <div className='visao-geral-recentactivity-content'></div>
        <div className='visao-geral-recentactivity-content'></div>

      </section>
      
    </div>
  )
}