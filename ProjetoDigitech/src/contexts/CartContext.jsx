import { createContext, useState } from "react";
import { products } from "../components/Produtos";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarProduto = (id) => {
    const produto = products.find((produto) => produto.id === id);
    if (produto) {
      setCarrinho((carrinho) => [...carrinho, produto]);
      alert("Produto adicionado ao carrinho!");
    }
  };

  const removerProduto = (id) => {
    setCarrinho((carrinho) => carrinho.filter((produto) => produto.id !== id));
    alert("Produto removido do carrinho!");
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    alert("Carrinho limpo!");
  };

  return (
    <CartContext.Provider value={{ carrinho, adicionarProduto, removerProduto, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export default CartContext;
