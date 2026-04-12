import logoAMC from '../assets/logo_amc2.png';
import './LoginForm.css';

export default function LoginForm() {
  return (
    <div className='login-card-white'>
      <div className='page-titles'>
        <img src={logoAMC} alt="Logo AMC" className='amc-logo-center' style={{width: '60px'}} />
        <h1>Bem-vindo</h1>
        <p>Acesse o portal da Academia</p>
      </div>

      <form>
        <div className='input-group'>
          <label htmlFor="email">E-mail</label>
          <div className='input-wrapper'>
            <span className='input-icon'>✉️</span>
            <input type="email" id='email' placeholder='Digite seu e-mail' required />
          </div>
        </div>

        <div className='input-group'>
          <div className='label-row'>
            <label htmlFor="password">SENHA</label>
            <a href="#" className='forgot-password'>Esqueceu a senha?</a>
          </div>
          <div className='input-wrapper'>
            <span className='input-icon'>🔒</span>
            <input type="password" id='password' placeholder='Digite sua senha' required/>
          </div>
        </div>

        <button type='submit' className='btn-enter'>
          ENTRAR
        </button>
      </form>

      <div className='register-area'>
        Ainda não tem acesso? {' '}
        <a href="#" className='register-link'>
          Cadastre-se
        </a>
      </div>
    </div>
  )
}