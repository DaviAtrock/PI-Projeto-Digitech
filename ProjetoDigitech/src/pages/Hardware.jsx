import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Hardware.css';
import ProdutoContext from '../contexts/ProdutoContext';

export default function Hardware() {
  const { produtos } = useContext(ProdutoContext);
  const produtosDepartamento = produtos.filter((produto) => produto.categoria === 'hardware');

  return (
    <div className="hardware-page">
      <Navbar />

      <section className="container my-5">
        <h2 className="text-left mb-4 title" id="titulo-hardware">Produtos de Hardware</h2>
        <div className="row row-cols-1 row-cols-md-5 g-4" id="grid-hardware">
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

      <Footer />
    </div>
  );
} 