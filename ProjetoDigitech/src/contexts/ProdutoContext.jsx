import { createContext, useState } from "react";
import { listaProdutos } from "../services/CartService";

const ProdutoContext = createContext({
  produtos: [],
  produtoCarrinho: [],
  listarProdutos: () => { },
  adicionaProdutoCarrinho: () => { },
  removerProduto: () => { },
});

export function ProdutoContextProvider(props) {
  const [produtos, setProdutos] = useState([]);
  const [produtoCarrinho, setProdutoCarrinho, removerProdutoCarrinho] = useState([]);

  async function listarProdutos() {
    try {
      const data = await listaProdutos();
      setProdutos(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function adicionaProdutoCarrinho(produto) {
    setProdutoCarrinho((prevProdutosCarrinho) => [...prevProdutosCarrinho, produto]);
  }

  function removerProduto(produtoId) {
    setProdutoCarrinho((prevProdutosCarrinho) =>
      prevProdutosCarrinho.filter((produto) => produto.id !== produtoId)
    );
  }
  

  const contexto = {
    produtos,
    produtoCarrinho,
    listarProdutos,
    adicionaProdutoCarrinho,
    removerProduto,
  };

  return (
    <ProdutoContext.Provider value={contexto}>
      {props.children}
    </ProdutoContext.Provider>
  );
}

export default ProdutoContext;
