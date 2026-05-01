import logoAMC from '../../assets/logo_amc2.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>

        {/* LOGO E DESCRIÇÃO */}
        <div className='footer-col'>
          <div className='footer-logo'>
            <img src={logoAMC} alt="Logotipo da AMC" style={{width: '40px'}} />
          </div>
          <p className='footer-desc'>
            Academia Maranhense de Ciências. Fomentando o desenvolvimento científico e tecnológico no estado do Maranhão.
          </p>
          <div className='social-icons'>
            <div className='icon-circle'>in</div>
            <div className='icon-circle'>ig</div>
            <div className='icon-circle'>fb</div>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className='footer-col'>
          <h4 className='footer-title'>Links Rápidos</h4>
          <a href="#">Inicio</a>
          <a href="#">A academia</a>
          <a href="#">Membros</a>
          <a href="#">Publicações</a>
        </div>

        {/* CONTATO */}
        <div className='footer-col'>
          <h4 className='footer-title'>Contato</h4>
          <p>São Luís, Maranhão - Brasil</p>
          <a href="mailto:contato@amc.org.br" className='email-link'>contato@amc.org.br</a>
        </div>

      </div>
    </footer>
  )
}