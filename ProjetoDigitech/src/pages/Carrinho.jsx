import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../components/Produtos';
import './Carrinho.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Carrinho() {
  const location = useLocation();
  const produtoSelecionado = location.state?.produtoSelecionado;
  const [produtoNoCarrinho, setProdutoNoCarrinho] = useState(produtoSelecionado);

  useEffect(() => {
    // Verificar se há um produto selecionado
    if (produtoSelecionado) {
      setProdutoNoCarrinho(produtoSelecionado);
    }
  }, [produtoSelecionado]);

  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">Seu Carrinho</div>
        <div className="content">
          <section className="sec-carrinho">
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
                {produtoNoCarrinho && (
                  <tr>
                    <td>
                      <div className="product">
                        <img src={produtoNoCarrinho.img} alt="" />
                        <div className="info">
                          <div className="name">{produtoNoCarrinho.nome}</div>
                          <div className="category">{produtoNoCarrinho.descricao}</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ {produtoNoCarrinho.preco}</td>
                    <td>
                      <div className="qty">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                    </td>
                    <td>R$ {produtoNoCarrinho.preco}</td>
                    <td>
                      <button className="remove">Remover</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <div className="box">
              <header className="header-resumo">Resumo da compra</header>
              <div className="info">
                <div>
                  <span>Sub-total</span>
                  <span>R$ {produtoNoCarrinho ? produtoNoCarrinho.preco : '0.00'}</span>
                </div>
                <div>
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
                <div>
                  <button>
                    Adicionar cupom de desconto
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <footer className="footer-compra">
                <span>Total</span>
                <span>R$ {produtoNoCarrinho ? produtoNoCarrinho.preco : '0.00'}</span>
              </footer>
            </div>
            <button className="finalizar-compra">Finalizar Compra</button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
