import logoAMC from '../assets/logo_amc2.png';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tentativa de Login:', { email, password})
  }

  return (
    <div className='login-card-white'>
      <div className='page-titles'>
        <img src={logoAMC} alt="Logo AMC" className='amc-logo-center' style={{width: '60px'}} />
        <h1>Bem-vindo</h1>
        <p>Acesse o portal da Academia</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="email">E-MAIL</label>
          <div className='input-wrapper'>
            <span className='input-icon'>✉️</span>
            <input 
              type="email" 
              id='email' 
              placeholder='Digite seu e-mail' 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className='input-group'>
          <div className='label-row'>
            <label htmlFor="password">SENHA</label>
            <a href="#" className='forgot-password'>Esqueceu a senha?</a>
          </div>
          <div className='input-wrapper'>
            <span className='input-icon'>🔒</span>
            <input 
              type="password" 
              id='password' 
              placeholder='Digite sua senha' 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type='submit' className='btn-enter'>
          ENTRAR
        </button>
      </form>

      <div className='register-area'>
        Ainda não tem acesso? {' '}
        <Link to="/cadastro" className='register-link' style={{ color:'#eab308', fontWeight: 'bold', textDecoration: 'none'}}>
          Cadastre-se
        </Link>
      </div>
    </div>
  )
}