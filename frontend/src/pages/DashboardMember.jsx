import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardMemberBody from "../components/DashboardMemberBody";
import './DashboardMember.css';

export default function DashboardMember() {
  return (
    <div className="page-container">
      <Header 
        botaoAmarelo={true}
        backgroundScroll={false} 
      />
      <main className='main-content'>
        <DashboardMemberBody />
      </main>
      <Footer />      
    </div>
  );
}