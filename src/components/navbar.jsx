import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "inherit",
    textDecoration: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
  };
  return (
    <nav>
      <Link to="./webshop/" className="navLink">Home</Link>
      <Link to="./webshop/products" className="navLink">Products</Link>
      <Link to="./webshop/chart" className="navLink">Chart</Link>
    </nav>
  );
}

export default Navbar;
