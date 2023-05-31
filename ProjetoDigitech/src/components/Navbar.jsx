import { BsSearch, BsCart, BsPerson } from 'react-icons/bs';
import './Navbar.css';
import { Link } from "react-router-dom";
// import { useState } from 'react';

export default function Header() {

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <div className="d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">LOGO</Link>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-1">
                    <form className="d-flex" id="search-form">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button><BsSearch /></button>
                    </form>
                </div>
                <div className="d-flex">
                    <Link to="/Carrinho" className="cart-icon me-3">
                        <BsCart className="bi bi-cart" style={{ color: "black" }} />
                    </Link>
                    <Link to="/Login" className="login-icon">
                        <BsPerson className="bi bi-person" style={{ color: "black" }} />
                    </Link>
                </div>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/Perfil">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/SobreNos">Sobre Nós</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    DEPARTAMENTOS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Celulares</a></li>
                                    <li><a className="dropdown-item" href="#">Computadores</a></li>
                                    <li><a className="dropdown-item" href="#">Hardware</a></li>
                                    <li><a className="dropdown-item" href="#">Periféricos</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Mais algo aqui</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}