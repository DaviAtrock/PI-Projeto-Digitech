import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reservarProduto } from '../services/CartService';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProdutoContext from '../contexts/ProdutoContext';
import './FinalizarCompra.css';

export default function FinalizarCompra() {
  const navigate = useNavigate();
  const { produtoCarrinho } = useContext(ProdutoContext);
  const [opcaoPagamento, setOpcaoPagamento] = useState(null);

  
  const finalizarCompra = async () => {
    
    try {
      for (const produto of produtoCarrinho) {
        await reservarProduto(produto.id, 'userId'); // Substitua 'userId' pelo ID do usuário atual
      }

      if (opcaoPagamento === 'bb') {
        // Lógica para redirecionar para o serviço de pagamento do Banco do Brasil
        window.location.href = 'https://www.bancodobrasil.com.br/';
      } else if (opcaoPagamento === 'pix') {
        // Lógica para redirecionar para o serviço de pagamento do Pix
        window.location.href = 'https://www.seupix.com.br/';
      }
    } catch (error) {
      console.error(error);
      // Tratar o erro adequadamente
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
              <br />

              <ul>
                {produtoCarrinho.map((produto, index) => (
                  <li key={index}>
                    <img src={produto.img} alt={produto.nome} />
                    <div className="info">
                      <div className="name">{produto.nome}</div>
                      <div className="quantity">Quantidade: {produto.quantidade}</div>
                      <div className="price">Preço unitário: R$ {produto.preco}</div>
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
