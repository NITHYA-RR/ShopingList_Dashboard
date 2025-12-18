import { useState } from "react";
import "../styles/sidebar.css";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      {/* HAMBURGER (Mobile) */}
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* CLOSE BUTTON (Mobile) */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* LOGO */}
        <div className="sidebar-logo">
          <i className="fa-solid fa-bolt logo-icon"></i>
          <span>Fixoria Sales</span>
        </div>

        {/* MAIN MENU */}
        <p className="menu-title">MAIN MENU</p>

        <ul className="menu">

          <li className="menu-item">
            <i className="fa-solid fa-house"></i> Home
          </li>

          {/* MY STORE */}
          <li className="menu-item-wrapper">
            <div
              className="menu-item"
              onClick={() =>
                setOpenMenu(openMenu === "store" ? null : "store")
              }
            >
              <i className="fa-solid fa-store"></i>
              <span>My Store</span>
              <i
                className={`fa-solid fa-chevron-down arrow ${
                  openMenu === "store" ? "rotate" : ""
                }`}
              ></i>
            </div>

            {openMenu === "store" && (
              <ul className="sub-menu">
                <li className="sub-item active">Products</li>
                <li className="sub-item">Orders</li>
                <li className="sub-item">Inventory</li>
                <li className="sub-item">Discount</li>
              </ul>
            )}
          </li>

          {/* FINANCE */}
          <li className="menu-item-wrapper">
            <div
              className="menu-item"
              onClick={() =>
                setOpenMenu(openMenu === "finance" ? null : "finance")
              }
            >
              <i className="fa-solid fa-wallet"></i>
              <span>Finance</span>
              <i
                className={`fa-solid fa-chevron-down arrow ${
                  openMenu === "finance" ? "rotate" : ""
                }`}
              ></i>
            </div>

            {openMenu === "finance" && (
              <ul className="sub-menu">
                <li className="sub-item">Payments</li>
                <li className="sub-item">Invoices</li>
                <li className="sub-item">Taxes</li>
              </ul>
            )}
          </li>

          {/* ANALYTICS */}
          <li className="menu-item-wrapper">
            <div
              className="menu-item"
              onClick={() =>
                setOpenMenu(openMenu === "analytics" ? null : "analytics")
              }
            >
              <i className="fa-solid fa-chart-line"></i>
              <span>Analytics</span>
              <i
                className={`fa-solid fa-chevron-down arrow ${
                  openMenu === "analytics" ? "rotate" : ""
                }`}
              ></i>
            </div>

            {openMenu === "analytics" && (
              <ul className="sub-menu">
                <li className="sub-item">Sales Report</li>
                <li className="sub-item">User Stats</li>
                <li className="sub-item">Performance</li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <i className="fa-solid fa-users"></i> Customers
          </li>

          <li className="menu-item">
            <i className="fa-solid fa-gear"></i> Settings
          </li>
        </ul>

        {/* SALES CHANNELS */}
        <p className="menu-title">SALES CHANNELS</p>

        <ul className="menu">
          <li className="menu-item">
            <i className="fa-solid fa-bag-shopping"></i> Online Store
          </li>
          <li className="menu-item">
            <i className="fa-solid fa-cash-register"></i> POS
          </li>
        </ul>

        {/* PROFILE */}
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <div>
            <h4>Himmad</h4>
            <p>CEO - Fixoriastudio</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;


