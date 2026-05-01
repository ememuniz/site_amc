import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import DashboardMemberBody from "../components/DashboardMemberBody";
import './DashboardMember.css';

export default function DashboardMember() {
  return (
    <div className="page-container">
      <Header 
        botaoAmarelo={true}
        backgroundScroll={false} 
      />
      <DashboardMemberBody />
      <Footer />      
    </div>
  );
}