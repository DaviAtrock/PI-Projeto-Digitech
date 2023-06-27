import { BsFillCartFill, BsFillPersonFill, BsFillKeyFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import LiveSearch from '../components/LiveSearch'
import logoImg from '../assets/logo4.png'
import UserContext from '../contexts/UserContext'
import './Navbar.css';

export default function Navbar() {
  const userContext = useContext(UserContext);
  const { logado } = userContext;
  const [searchQuery, setSearchQuery] = useState("");
  const [setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleClearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);
  };

  const renderProductItem = (item) => {
    return (
      <Link to={`/produto/${item.id}`} className="search-item">
        <img src={item.img} alt={item.nome} className="search-item-image" />
        <div className="search-item-details">
          <h4 className="search-item-name">{item.nome}</h4>
          <span className="search-item-price">{item.preco}</span>
        </div>
      </Link>
    );
  };

  return (
    <nav className="navbar fixed-top" id="nav-height">
      <div className="container-fluid">
        <div className="d-flex">

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/" className="navbar-brand">
            <img src={logoImg} className="logo-img" alt="Logo" />
          </Link>
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
                  {/* <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Contate-nos</a></li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`live-search-container ${showResults ? 'results-visible' : ''}`} id="cont-resultados">
          <LiveSearch
            renderItem={renderProductItem}
            value={searchQuery}
            onChange={handleSearchChange}
            onSelect={(item) => {
              setSearchQuery(item.nome);
              setShowResults(false);
            }}
          />
          {searchQuery && (
            <button className="clear-search" onClick={handleClearSearch}>
              &times;
            </button>
          )}
        </div>

    </nav>
  );
}
