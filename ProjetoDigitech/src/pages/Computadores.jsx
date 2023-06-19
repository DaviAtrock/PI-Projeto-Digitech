import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Computadores.css';

export default function Computadores() {
    // Aqui você pode adicionar a lógica para obter os produtos da categoria "Hardware" e armazená-los em uma variável
    
    const produtos = [
      // Exemplo de produtos da categoria "Hardware"
      {
        id: 3,
        nome: 'Notebook Lenovo',
        descricao: 'Notebook Gamer Lenovo Gaming 3i Intel Core i5.',
        imagem: 'img/notebook-lenovo-card3.jpg',
      },
      // Adicione mais produtos aqui
    ];
  
    return (
      <div className="computadores-page">
        <Navbar />
  
        <section className="container my-5">
          <h2 className="text-left mb-4 title" id="titulo-computadores">Computadores</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-computadores">
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