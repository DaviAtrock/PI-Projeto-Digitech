import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CelularesTab.css';

export default function CelularesTab() {
    // Aqui você pode adicionar a lógica para obter os produtos da categoria "Hardware" e armazená-los em uma variável
    
    const produtos = [
      // Exemplo de produtos da categoria "Hardware"
      {
        id: 10,
        nome: 'Samsung Galaxy S20',
        descricao: 'Smartphone Samsung Galaxy S20 FE 5G, 6GB.',
        imagem: 'img/smartphone-samsung-galaxy-card1.jpg',
      },
      {
        id: 2,
        nome: 'Galaxy Tab A8',
        descricao: 'Tablet Samsung Galaxy Tab A8 4G, 64GB, 4GB RAM.',
        imagem: 'img/tabletgalaxya8-card10.jpg',
      },
      // Adicione mais produtos aqui
    ];
  
    return (
      <div className="celularestab-page">
        <Navbar />
  
        <section className="container my-5">
          <h2 className="text-left mb-4 title" id="titulo-celularestab">Celulares/Tablets</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-celularestab">
            {produtos.map((produto) => (
              <div className="col" key={produto.id}>
                <div className="card h-100">
                  <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
                  <div className="card-body">
                    <h5 className="card-title">{produto.nome}</h5>
                    <p className="card-text">{produto.descricao}</p>
                    <a href="#" className="btn btn-primary">Saiba Mais</a>
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