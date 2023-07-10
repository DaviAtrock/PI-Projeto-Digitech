import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reservarPedido } from '../services/CartService';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProdutoContext from '../contexts/ProdutoContext';
import './FinalizarCompra.css';

export default function FinalizarCompra() {
  const navigate = useNavigate();
  const { produtoCarrinho, limparCarrinho } = useContext(ProdutoContext);
  const [opcaoPagamento, setOpcaoPagamento] = useState(null);
  const [quantidades, setQuantidades] = useState({});


  const finalizarCompra = async () => {
    try {
      const pedidoId = generateUniqueId(); // Gerar um ID para o pedido

      for (const produto of produtoCarrinho) {
        const quantidadeSelecionada = quantidades[produto.id] || 1;
        for (let i = 0; i < quantidadeSelecionada; i++) {
          await reservarPedido(produto.id, 'userId', pedidoId); // Substitua 'userId' pelo ID do usuário atual
        }
      }

      limparCarrinho();

    } catch (error) {
      console.error(error);
      // Tratar o erro adequadamente
    }
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Obtém o timestamp atual em base 36
    const randomString = Math.random().toString(36).substring(2, 10); // Gera uma string aleatória de 8 caracteres em base 36
    const uniqueId = timestamp + randomString; // Concatena o timestamp e a string aleatória
    return uniqueId;
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
                      <div className="quantity">Quantidade: {quantidades[produto.id] || 1}</div> 
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
            <Link to="/ConfCompra" onClick={finalizarCompra} className="confirmar-compra" id="btn-confcompra">
              Confirmar Compra
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
