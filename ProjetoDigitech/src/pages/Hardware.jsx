import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Hardware.css';

function Hardware() {
    // Aqui você pode adicionar a lógica para obter os produtos da categoria "Hardware" e armazená-los em uma variável
    
    const produtos = [
      // Exemplo de produtos da categoria "Hardware"
      {
        id: 1,
        nome: 'RTX 3060 Ti',
        descricao: 'Placa de Video RTX 3060 TI Dual Fan PNY NVIDIA.',
        imagem: 'img/placadevideo-card2.jpg',
      },
      {
        id: 2,
        nome: 'Placa Mãe MSI',
        descricao: 'Placa Mãe MSI A520M-A PRO, AMD AM4, mATX.',
        imagem: 'img/placamae-card6.jpg',
      },
      {
        id: 3,
        nome: 'Memória XPG',
        descricao: 'Memória XPG Gammix D10, 8GB, 3200MHz, DDR4.',
        imagem: 'img/memoria-card8.jpg',
      },
      // Adicione mais produtos aqui
    ];
  
    return (
      <div className="hardware-page">
        <Navbar />
  
        <section className="container my-5">
          <h2 className="text-left mb-4 title" id="titulo-hardware">Produtos de Hardware</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-hardware">
            {produtos.map((produto) => (
              <div className="col" key={produto.id}>
                <div className="card h-100">
                  <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
                  <div className="card-body">
                    <h5 className="card-title">{produto.nome}</h5>
                    <p className="card-text">{produto.descricao}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }
  
  export default Hardware;  