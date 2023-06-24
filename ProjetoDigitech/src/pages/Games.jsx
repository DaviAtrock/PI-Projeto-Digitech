import { useContext, useEffect, useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Games.css';
import ProdutoContext from '../contexts/ProdutoContext';

export default function Games() {
  const { produtos, listarProdutos } = useContext(ProdutoContext);
  const produtosDepartamento = produtos.filter((produto) => produto.categoria === 'games');

  useEffect(() => {
    listarProdutos();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="games-page">
          <section className="container my-5">
            <h2 className="text-left mb-4 title" id="titulo-games">Video Games</h2>
            <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-games">
              {produtosDepartamento.map((produto) => (
                <div className="col" key={produto.id}>
                  <div className="card h-100">
                    <img src={produto.img} className="card-img-top" alt={produto.nome} />
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
        </div>
      </main>
      <Footer />
    </>
  );
}

