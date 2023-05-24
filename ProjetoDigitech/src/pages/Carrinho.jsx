import './Carrinho.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsFileMinus, BsFilePlus, BsX } from 'react-icons/bs';


export default function Carrinho() {

  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">Seu Carrinho</div>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product">
                      <img src="img/placadevideo-card2.jpg" alt="" />
                      <div className="info">
                        <div className="name">Placa de Vídeo RTX 3060 TI PNY</div>
                        <div className="category">Hardware</div>
                      </div>
                    </div>
                  </td>
                  <td>R$ 2.589,99</td>
                  <td>
                    <div className="qty">
                      <button><BsFileMinus /></button>
                      <span>2</span>
                      <button><BsFilePlus /></button>
                    </div>
                  </td>
                  <td>R$ 2.589,99</td>
                  <td>
                    <button className="remove"><BsX /></button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <img src="img/notebook-lenovo-card3.jpg" alt="" />
                      <div className="info">
                        <div className="name">Notebook Gamer Lenovo Gaming 3i Intel Core i5.</div>
                        <div className="category">Notebook</div>
                      </div>
                    </div>
                  </td>
                  <td>R$ 3.799,99</td>
                  <td>
                    <div className="qty">
                      <button><button><BsFileMinus /></button></button>
                      <span>2</span>
                      <button><BsFilePlus /></button>
                    </div>
                  </td>
                  <td>R$ 3.799,99</td>
                  <td>
                    <button className="remove"><BsX /></button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="product">
                      <img src="img/monitor-gamer-card4.jpg" alt="" />
                      <div className="info">
                        <div className="name">Monitor Gamer Husky Tempest 34' VA, Ultrawide.</div>
                        <div className="category">Periféricos</div>
                      </div>
                    </div>
                  </td>
                  <td>R$ 1.999,99</td>
                  <td>
                    <div className="qty">
                      <button><BsFileMinus /></button>
                      <span>2</span>
                      <button><BsFilePlus /></button>
                    </div>
                  </td>
                  <td>R$ 1.999,99</td>
                  <td>
                    <button className="remove"><BsX /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <aside>
            <div className="box">
              <header >Resumo da compra</header>
              <div className="info">
                <div><span>Sub-total</span><span>R$ 8.389,97</span></div>
                <div><span>Frete</span><span>Gratuito</span></div>
                <div>
                  <button>
                    Adicionar cupom de desconto
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <footer>
                <span>Total</span>
                <span>R$ 8.389,97</span>
              </footer>
            </div>
            <button>Finalizar Compra</button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}