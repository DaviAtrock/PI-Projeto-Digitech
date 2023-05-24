import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="menu-icon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="logo">
                    <Link to="/">LOGO</Link>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Pesquisar..." />
                    <button><BsSearch /></button>
                    <Link to="/Carrinho" className="cart-icon">
                        <BsCart className="bi bi-cart" style={{ color: "black" }} />
                    </Link>
                    <Link to="/Login" className="login-icon">
                        <BsPerson className="bi bi-person" style={{ color: "black" }} />
                    </Link>
                </div>
            </nav>
        </header>
    );
}