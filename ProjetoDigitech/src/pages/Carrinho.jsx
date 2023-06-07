import React, { useState } from 'react';
import { BsFileMinus, BsFilePlus, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import './Carrinho.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Carrinho() {
  const [quantidades, setQuantidades] = useState([2, 2, 2]); // Estado para as quantidades dos produtos
  const precos = [2589.99, 2589.99, 2589.99]; // Array de preços dos produtos

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
                {/* Renderizar linhas de produtos com base no estado das quantidades */}
                {quantidades.map((quantidade, index) => (
                  <tr key={index}>
                    <td>
                      <div className="product">
                        <img src="img/placadevideo-card2.jpg" alt="" />
                        <div className="info">
                          <div className="name">Placa de Vídeo RTX 3060 TI PNY</div>
                          <div className="category">Hardware</div>
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
            <button>
              <Link to="/FinalizarCompra" className="finalizar-compra">Finalizar Compra</Link>
            </button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}