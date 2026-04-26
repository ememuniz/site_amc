import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardAdminBody from "../components/DashboardAdminBody";
import './DashboardAdmin.css';

export default function DashboardAdmin() {
  return (
    <div className="page-container">
      <Header 
        botaoAmarelo={true}
        backgroundScroll={false} 
      />
      <main className='main-content'>
        <DashboardAdminBody />      
      </main>
      <Footer />
    </div>
  );
}