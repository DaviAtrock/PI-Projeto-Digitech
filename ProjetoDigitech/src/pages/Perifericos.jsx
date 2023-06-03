import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Perifericos.css';

export default function Perifericos() {
    // Aqui você pode adicionar a lógica para obter os produtos da categoria "Hardware" e armazená-los em uma variável
    
    const produtos = [
      // Exemplo de produtos da categoria "Hardware"
      {
        id: 1,
        nome: 'Monitor Gamer Husky',
        descricao: 'Monitor Gamer Husky Tempest 34 Ultrawide.',
        imagem: 'img/monitor-gamer-card4.jpg',
      },
      {
        id: 2,
        nome: 'HyperX Cloud Alpha',
        descricao: 'Headset Gamer Sem fio HyperX Cloud Alpha.',
        imagem: 'img/headset-card7.jpg',
      },
      {
        id: 3,
        nome: 'Mouse Razer Viper',
        descricao: 'Mouse Sem Fio Gamer Razer Viper Ultimate.',
        imagem: 'img/mouserazer-card9.jpg',
      },
      // Adicione mais produtos aqui
    ];
  
    return (
      <div className="perifericos-page">
        <Navbar />
  
        <section className="container my-5">
          <h2 className="text-left mb-4 title" id="titulo-perifericos">Periféricos</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-perifericos">
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