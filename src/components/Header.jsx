import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      {/* LEFT - SEARCH */}
      <div className="header-left">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      {/* RIGHT - ICONS */}
      <div className="header-right">
        <i className="fa-regular fa-bell header-icon"></i>
        <i className="fa-regular fa-envelope header-icon"></i>
      </div>
    </header>
  );
}

export default Header;
