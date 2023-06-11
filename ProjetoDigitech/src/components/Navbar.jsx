import { BsSearch, BsFillCartFill, BsFillPersonFill, BsFillKeyFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import './Navbar.css';
import logoImg from '../assets/logo4.png'
import UserContext from '../contexts/UserContext'

export default function Navbar() {
    const userContext = useContext(UserContext);
    const { logado } = userContext;
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Pesquisar por:", searchQuery);
    };

    const handleSearchClick = () => {
        if (searchQuery !== "") {
            fetch(`https://api.example.com/search?q=${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Resultados da pesquisa:", data);
                })
                .catch(error => {
                    console.error("Erro na solicitação de pesquisa:", error);
                });
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <div className="d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img src={logoImg} className="logo-img" alt="Logo" />
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-1">
                    <form className="d-flex" id="search-form" onSubmit={handleSearchSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                        <button type="submit" onClick={handleSearchClick}><BsSearch /></button>
                    </form>
                </div>
                <div className="d-flex">
                    <Link to="/Carrinho" className="cart-icon me-3">
                        <BsFillCartFill className="bi bi-cart" style={{ color: "black" }} />
                    </Link>
                    {logado ? (
                        <Link to="/Perfil" className="perfil-icon me-3">
                            <BsFillPersonFill className="bi bi-person" style={{ color: "black" }} />
                        </Link>
                    ) : (
                        <Link to="/Login" className="perfil-icon me-3">
                            <BsFillKeyFill className="bi bi-key" style={{ color: "black" }} />
                        </Link>
                    )}
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
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
                                    <li><Link className="dropdown-item" to="/CelularesTab">Celulares/Tablets</Link></li>
                                    <li><Link className="dropdown-item" to="/Computadores">Computadores</Link></li>
                                    <li><Link className="dropdown-item" to="/Games">Games</Link></li>
                                    <li><Link className="dropdown-item" to="/Hardware">Hardware</Link></li>
                                    <li><Link className="dropdown-item" to="/Perifericos">Periféricos</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Contate-nos</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
