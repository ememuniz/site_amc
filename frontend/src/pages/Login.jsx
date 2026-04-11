import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
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