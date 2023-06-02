import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import Navbar from "../components/Navbar"
import "./Home.css"

export default function Pesquisa() {

  return (
    <>
      <Navbar />
      <section id="produtos" className="container my-5">
        <h2 className="text-left mb-4 title">Busca</h2>
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
      <Footer />
    </>
  )
}