function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Taaj Perfume</h2>

      <nav className="nav-links">
        <a>Home</a>
        <a>Shop</a>
        <a>About</a>
        <a>Contact</a>
      </nav>

      <button className="buy-btn">Buy Now</button>
    </header>
  );
}

export default Navbar;