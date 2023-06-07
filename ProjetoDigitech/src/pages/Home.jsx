import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import "./Home.css"

export default function Home() {

  return (
    <>
      <Navbar />
      <main>
        <div className="container-fluid container-home" id="carousel">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner mx-auto" style={{ width: "1600px" }}>
              <div className="carousel-item active">
                <img src="img/bannercomputadores.jpg" className="d-block w-100 carousel-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Novas Placas RTX</h5>
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
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <section id="produtos" className="container my-5">
          <h2 className="text-left mb-4 title">Produtos em destaque</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="img/smartphone-samsung-galaxy-card1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Samsung Galaxy S20</h5>
                  <p className="card-text">Smartphone Samsung Galaxy S20 FE 5G, 6GB.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/placadevideo-card2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">RTX 3060 Ti</h5>
                  <p className="card-text">Placa de Video RTX 3060 TI Dual Fan PNY NVIDIA.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/notebook-lenovo-card3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Notebook Lenovo</h5>
                  <p className="card-text">Notebook Gamer Lenovo Gaming 3i Intel Core i5.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/monitor-gamer-card4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Monitor Gamer Husky</h5>
                  <p className="card-text">Monitor Gamer Husky Tempest 34' Ultrawide.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/console-sony-ps5-card5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sony Playstation 5</h5>
                  <p className="card-text">Console Sony PS5 + God of War Ragnarök, Branco.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="produtos" className="container my-5">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="img/placamae-card6.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Placa Mãe MSI</h5>
                  <p className="card-text">Placa Mãe MSI A520M-A PRO, AMD AM4, mATX.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/headset-card7.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HyperX Cloud Alpha</h5>
                  <p className="card-text">Headset Gamer Sem fio HyperX Cloud Alpha.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/memoria-card8.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Memória XPG</h5>
                  <p className="card-text">Memória XPG Gammix D10, 8GB, 3200MHz, DDR4.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/mouserazer-card9.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mouse Razer Viper</h5>
                  <p className="card-text">Mouse Sem Fio Gamer Razer Viper Ultimate.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="img/tabletgalaxya8-card10.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Galaxy Tab A8</h5>
                  <p className="card-text">Tablet Samsung Galaxy Tab A8 4G, 64GB, 4GB RAM.</p>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}