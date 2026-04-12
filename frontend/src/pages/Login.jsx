import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import LoginForm from '../components/LoginForm.jsx';
import './Login.css';

export default function Login() {
  return (
    <div claasName='page-container'>
      <Header />
      <main className='main-content'>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
  //   
}