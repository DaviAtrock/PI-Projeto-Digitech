import { createContext, useState } from "react"
import { listaProdutos } from "../services/CartService"

const ProdutoContext = createContext({
  produtos: [],
  produtoCarrinho: [],
  listarProdutos: () => { },
  adicionaProdutoCarrinho: () => { },
})

export function ProdutoContextProvider(props) {
  const [produtos, setProdutos] = useState([])

  const [produtoCarrinho, setProdutoCarrinho] = useState([])

  async function listarProdutos() {
    try {
      const data = await listaProdutos()
      setProdutos(data)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  function adicionaProdutoCarrinho(produto) {
    setProdutoCarrinho((prevProdutosCarrinho) => [...prevProdutosCarrinho, produto]);
  }  

  const contexto = {
    produtos,
    produtoCarrinho,
    listarProdutos,
    adicionaProdutoCarrinho,
  }

  return (
    <ProdutoContext.Provider value={contexto}>
      {props.children}
    </ProdutoContext.Provider>
  )

}

export default ProdutoContext;