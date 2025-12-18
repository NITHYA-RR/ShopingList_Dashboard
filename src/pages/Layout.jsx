import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main-content">
        <Header />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
