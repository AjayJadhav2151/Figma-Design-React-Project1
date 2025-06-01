function Navigation() {
  return (
    <nav className="container">
      <div className="brandlogo">
        <img src="/Images/brand_logo.png" alt="Logo " />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="btnlog">Login</button>
    </nav>
  );
}

export default Navigation;
