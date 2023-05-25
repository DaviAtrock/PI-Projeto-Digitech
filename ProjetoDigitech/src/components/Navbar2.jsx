import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <header>
        <nav>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <div className={`search-box ${isMenuOpen ? 'open' : ''}`}>
            <input type="text" placeholder="Pesquisar..." />
            <button><BsSearch /></button>
            <Link to="/Carrinho" className="cart-icon">
              <BsCart className="bi bi-cart" style={{ color: "black" }} />
            </Link>
            <Link to="/Login" className="login-icon">
              <BsPerson className="bi bi-person" style={{ color: "black" }} />
            </Link>
            {isMenuOpen && (
            <div className="menu-links">
              <Link to="/hardware">Hardware</Link>
            </div>
          )}
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;