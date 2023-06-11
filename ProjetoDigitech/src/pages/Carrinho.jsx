import { useState, useContext } from 'react';
import { BsFileMinus, BsFilePlus, BsX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { products } from '../components/Produtos';
import './Carrinho.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UserContext from '../contexts/UserContext';

export default function Carrinho() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const { logado } = userContext;

  const [quantidades, setQuantidades] = useState(Array(products.length).fill(2)); // Estado para as quantidades dos produtos
  const precos = products.map((produto) => parseFloat(produto.preco)); // Array de preços dos produtos

  // Função para decrementar a quantidade de um produto
  const decrementarQuantidade = (index) => {
    const novasQuantidades = [...quantidades];
    if (novasQuantidades[index] > 1) {
      novasQuantidades[index] -= 1;
      setQuantidades(novasQuantidades);
    }
  };

  // Função para incrementar a quantidade de um produto
  const incrementarQuantidade = (index) => {
    const novasQuantidades = [...quantidades];
    novasQuantidades[index] += 1;
    setQuantidades(novasQuantidades);
  };

  // Função para remover um produto do carrinho
  const removerProduto = (index) => {
    const novasQuantidades = [...quantidades];
    novasQuantidades.splice(index, 1);
    setQuantidades(novasQuantidades);
  };

  // Função para calcular o subtotal do carrinho
  const calcularSubtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < quantidades.length; i++) {
      subtotal += quantidades[i] * precos[i];
    }
    return subtotal.toFixed(2);
  };

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    const subtotal = calcularSubtotal();
    const frete = 0; // Supondo frete gratuito
    return (Number(subtotal) + Number(frete)).toFixed(2);
  };

  const finalizarCompra = () => {
    const produtosSelecionados = quantidades.map((quantidade, index) => ({
      produto: products[index],
      quantidade: quantidade,
    }));

    if (logado) {
      navigate('/FinalizarCompra', { state: { produtos: produtosSelecionados } });
    } else {
      navigate('/Login');
    }
  };

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
                {quantidades.map((quantidade, index) => (
                  <tr key={index}>
                    <td>
                      <div className="product">
                        <img src={products[index].img} alt="" />
                        <div className="info">
                          <div className="name">{products[index].nome}</div>
                          <div className="category">{products[index].descricao}</div>
                        </div>
                      </div>
                    </td>
                    <td>R$ {precos[index]}</td>
                    <td>
                      <div className="qty">
                        <button onClick={() => decrementarQuantidade(index)}>
                          <BsFileMinus />
                        </button>
                        <span>{quantidade}</span>
                        <button onClick={() => incrementarQuantidade(index)}>
                          <BsFilePlus />
                        </button>
                      </div>
                    </td>
                    <td>R$ {(quantidade * precos[index]).toFixed(2)}</td>
                    <td>
                      <button className="remove" onClick={() => removerProduto(index)}>
                        <BsX />
                      </button>
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
                  <span>R$ {calcularSubtotal()}</span>
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
                <span>R$ {calcularTotal()}</span>
              </footer>
            </div>
            <button onClick={finalizarCompra} className="finalizar-compra">
              Finalizar Compra
            </button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}