import { useNavigate } from 'react-router-dom';
import React from 'react';
import './FinalizarCompra.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function FinalizarCompra() {
  const navigate = useNavigate();

  // Função para redirecionar para o serviço de pagamento do Banco do Brasil
  const finalizarCompraBancoDoBrasil = () => {
    // Lógica para redirecionar para o serviço de pagamento do Banco do Brasil
    window.location.href = 'https://www.bancodobrasil.com.br/';
  };

  // Função para redirecionar para o serviço de pagamento do Pix
  const finalizarCompraPix = () => {
    // Lógica para redirecionar para o serviço de pagamento do Pix
    window.location.href = 'https://www.seupix.com.br/';
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="page-title">Finalizar Compra</div>
        <div className="content">
          <section>
            {/* Renderizar resumo da compra */}
            <div className="box">
              <header>Resumo da compra</header>
              {/* Incluir detalhes da compra, como produtos, quantidades, preços, etc. */}
            </div>
          </section>
          <aside>
            <div className="box">
              <header>Forma de Pagamento</header>
              <div className="payment-options">
                {/* Opção Banco do Brasil */}
                <div className="payment-option">
                  <img src="path/to/bancodobrasil-logo.png" alt="Banco do Brasil" />
                  <button onClick={finalizarCompraBancoDoBrasil}>Pagar com Banco do Brasil</button>
                </div>
                {/* Opção Pix */}
                <div className="payment-option">
                  <img src="path/to/pix-logo.png" alt="Pix" />
                  <button onClick={finalizarCompraPix}>Pagar com Pix</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}