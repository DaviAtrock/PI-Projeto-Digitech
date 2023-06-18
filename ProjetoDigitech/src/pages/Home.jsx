import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../components/Produtos';
import './Home.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState([]); // Estado para os produtos no carrinho

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    navigate('/Carrinho', { state: { produtoSelecionado: produto } });
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="container-fluid container-home" id="carousel">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/ASUS-Z790-Series.png" className="d-block w-100 carousel-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Novas Placas Asus</h5>
                  <p>Confira os últimos lançamentos.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner-blackweek.jpg" className="d-block w-100 carousel-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Ofertas Black Week</h5>
                  <p>Confira os nossos melhores preços.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner_img.jpg" className="d-block w-100 carousel-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Ofertas do dia</h5>
                  <p>Aproveite nossas melhores ofertas, confira!</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <section id="produtos" className="container my-5">
          <h2 className="text-left mb-4 title">Produtos em destaque</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4" id="cat-prod">
            {products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100">
                  <img src={product.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.nome}</h5>
                    <p className="card-text">{product.descricao}</p>
                    <button onClick={() => adicionarAoCarrinho(product)} className="btn btn-primary">Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}