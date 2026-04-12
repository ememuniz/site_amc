import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroForm from "../components/CadastroForm";
import './Cadastro.css';

export default function Cadastro() {
  return (
    <div className="page-container">
      <Header botaoAmarelo={false} />
      <main className="main-content">
        <CadastroForm />
      </main>
      <Footer />
    </div>
  )
}