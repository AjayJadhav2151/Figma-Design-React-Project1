import img from "./images/brand_logo.png";
function Navigation() {
  return (
    <nav className="container">
      <div className="brandlogo">
        <img src={img} alt="Logo " />
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
