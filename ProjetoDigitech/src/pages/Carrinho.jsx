import { useContext, useEffect, useState } from 'react';
import { BsFileMinus, BsFilePlus, BsFillFileExcelFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import './Carrinho.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProdutoContext from '../contexts/ProdutoContext';

export default function Carrinho() {
  const { produtoCarrinho, removerProduto } = useContext(ProdutoContext);
  const [quantidades, setQuantidades] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log(produtoCarrinho);
  }, []);

  function incrementarQuantidade(produtoId) {
    setQuantidades((prevQuantidades) => ({
      ...prevQuantidades,
      [produtoId]: (prevQuantidades[produtoId] || 1) + 1,
    }));
  }

  function decrementarQuantidade(produtoId) {
    setQuantidades((prevQuantidades) => {
      const quantidadeAtual = prevQuantidades[produtoId] || 1;
      if (quantidadeAtual > 1) {
        return {
          ...prevQuantidades,
          [produtoId]: quantidadeAtual - 1,
        };
      } else {
        const { [produtoId]: _, ...rest } = prevQuantidades;
        return rest;
      }
    });
  }

  const subTotal = produtoCarrinho.reduce((total, produto) => {
    const quantidade = quantidades[produto.id] || 1;
    return total + produto.preco * quantidade;
  }, 0);

  const total = subTotal;

  function handleFinalizarCompra() {
    navigate('/FinalizarCompra', { state: { produtos: produtoCarrinho } });
  }  

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
                {produtoCarrinho.map((produtoNoCarrinho) => (
                  <tr key={produtoNoCarrinho.id}>
                    <td>
                      <div className="product">
                        <img src={produtoNoCarrinho.img} alt="" />
                        <div className="info">
                          <div className="name">{produtoNoCarrinho.nome}</div>
                          <div className="category">{produtoNoCarrinho.descricao}</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ {produtoNoCarrinho.preco.toFixed(2)}</td>
                    <td>
                      <div className="qty">
                        <span>
                          <BsFileMinus onClick={() => decrementarQuantidade(produtoNoCarrinho.id)} />
                        </span>
                        <span>{quantidades[produtoNoCarrinho.id] || 1}</span>
                        <span>
                          <BsFilePlus onClick={() => incrementarQuantidade(produtoNoCarrinho.id)} />
                        </span>
                      </div>
                    </td>
                    <td>R$ {(produtoNoCarrinho.preco * (quantidades[produtoNoCarrinho.id] || 1)).toFixed(2)}</td>
                    <td>
                      <span>
                        <BsFillFileExcelFill onClick={() => removerProduto(produtoNoCarrinho.id)} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <aside>
            <div className="box">
              <header className="header-resumo">Resumo da compra</header>
              <div className="info">
                <div>
                  <span>Sub-total</span>
                  <span>R$ {subTotal.toFixed(2)}</span>
                </div>
                <div>
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
              </div>
              <footer className="footer-compra">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </footer>
            </div>
            <Link to="/FinalizarCompra" className="finalizar-compra" id="btn-fincompra" onClick={handleFinalizarCompra}>Finalizar Compra</Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
