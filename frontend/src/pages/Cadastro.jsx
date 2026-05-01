import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import CadastroForm from "../components/CadastroForm";
import './Cadastro.css';

export default function Cadastro() {
  return (
    <div className="page-container">
      <Header 
        botaoAmarelo={false}
        backgroundScroll={false}   
      />
      <main className="main-content">
        <CadastroForm />
      </main>
      <Footer />
    </div>
  )
}