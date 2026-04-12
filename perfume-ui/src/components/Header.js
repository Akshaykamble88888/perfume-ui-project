import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Perfume</h2>

      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;