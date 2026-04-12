import logoAMC from '../assets/logo_amc2.png';
import './CadastroForm.css';
import { Link } from 'react-router-dom';

export default function CadastroForm() {
  return (
    <div className='login-card-white'>
      <div className='page-titles'>
        <img src={logoAMC} alt="Logo AMC" className='amc-logo-center' style={{width: '60px' }} />
        <h1>Crie sua conta</h1>
        <p>Junte-se à Academia Maranhense de Ciências</p>
      </div>

      <form>
        <div className='input-group'>
          <label htmlFor="nome">NOME COMPLETO</label>
          <div className='input-wrapper'>
            <span className='input-icon'>👤</span>
            <input type="text" id='nome' placeholder='Digite seu nome completo' required />
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor="codigo">CÓDIGO DE AUTORIZAÇÃO</label>
          <div className='input-wrapper'>
            <span className='input-icon'>🔑</span>
            <input type="text" id='codigo' placeholder='Digite o código recebido' required />
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor="email">E-MAIL</label>
          <div className='input-wrapper'>
            <span className='input-icon'>✉️</span>
            <input type="email" id='email' placeholder='Digite seu e-mail' required />
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor="password">SENHA</label>
          <div className='input-wrapper'>
            <span className='input-icon'>🔒</span>
            <input type="password" id='password' placeholder='Crie uma senha forte' required />
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor="confirm-password">CONFIRMAR SENHA</label>
          <div className='input-wrapper'>
            <span className='input-icon'>🔐</span>
            <input type="password" id='confirm-password' placeholder='Repita sua senha' required />
          </div>
        </div>

        <button type='submit' className='btn-enter'>
          CADASTRAR
        </button>
      </form>

      <div className='register-area'>
        Já tem uma conta?{' '}
        <Link to="/" className='register-link'>
          Entrar
        </Link>
      </div>
    </div>
  )
}