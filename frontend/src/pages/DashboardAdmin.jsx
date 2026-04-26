import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardAdminBody from "../components/DashboardAdminBody";

export default function DashboardAdmin() {
  return (
    <div className="page-container">
      <Header botaoAmarelo={true} />
      <DashboardAdminBody />      
      <Footer />
    </div>
  );
}