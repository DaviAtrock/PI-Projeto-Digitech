import { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1' },
    { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2' },
    { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3' },
  ]);

  return (
    <>
    <Navbar />
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;
