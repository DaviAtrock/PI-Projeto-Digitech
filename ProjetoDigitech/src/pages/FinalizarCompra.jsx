import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FinalizarCompra.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function FinalizarCompra() {
  const navigate = useNavigate();
  const location = useLocation();
  const { produtos } = location.state;
  const [opcaoPagamento, setOpcaoPagamento] = useState(null);

  // Função para redirecionar para o serviço de pagamento selecionado
  const finalizarCompra = () => {
    if (opcaoPagamento === 'bb') {
      // Lógica para redirecionar para o serviço de pagamento do Banco do Brasil
      window.location.href = 'https://www.bancodobrasil.com.br/';
    } else if (opcaoPagamento === 'pix') {
      // Lógica para redirecionar para o serviço de pagamento do Pix
      window.location.href = 'https://www.seupix.com.br/';
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">Sua Compra</div>
        <div className="content">
          <section className="sec-compra">
            {/* Renderizar resumo da compra */}
            <div className="box">
              <header className="header-fincompra">Resumo da compra</header>
              <ul>
                {produtos.map((produto, index) => (
                  <li key={index}>
                    <img src={produto.produto.img} alt={produto.produto.nome} />
                    <div className="info">
                      <div className="name">{produto.produto.nome}</div>
                      <div className="quantity">Quantidade: {produto.quantidade}</div>
                      <div className="price">Preço unitário: R$ {produto.produto.preco}</div>
                      <div className="total">
                        Total: R$ {(produto.quantidade * produto.produto.preco).toFixed(2)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <aside>
            <div className="box">
              <header className="header-fin">Forma de Pagamento</header>
              <div className="payment-options">
                {/* Opção Banco do Brasil */}
                <div className="payment-option">
                  <label className="bb-option" htmlFor="bb">
                    <input
                      type="radio"
                      id="bb"
                      name="paymentOption"
                      value="bb"
                      checked={opcaoPagamento === 'bb'}
                      onChange={() => setOpcaoPagamento('bb')}
                    />
                    <img src="img/logobb.png" alt="Banco do Brasil" />
                  </label>
                </div>
                {/* Opção Pix */}
                <div className="payment-option">
                  <label htmlFor="pix">
                    <input
                      type="radio"
                      id="pix"
                      name="paymentOption"
                      value="pix"
                      checked={opcaoPagamento === 'pix'}
                      onChange={() => setOpcaoPagamento('pix')}
                    />
                    <img src="img/logopix.png" className="pix-logo" alt="Pix" />
                  </label>
                </div>
              </div>
            </div>
            <button onClick={finalizarCompra} className="confirmar-compra">
              Confirmar Compra
            </button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
