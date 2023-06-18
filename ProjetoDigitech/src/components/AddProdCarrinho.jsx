import { products } from "./Produtos"

function adicionarAoCarrinho(idProduto) {
    // Encontre o produto pelo ID no array 'products'
    const produto = products.find((p) => p.id === idProduto);

    // Verifique se o produto foi encontrado
    if (produto) {
        // Adicione o produto ao carrinho (código a ser implementado)
        // Por exemplo: carrinho.push(produto);
        alert("Produto adicionado ao carrinho!");
    }
}

function finalizarCompra() {
    // Verifique se o carrinho está vazio
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    // Crie um objeto com os dados da venda
    const venda = {
        usuario: nomeDoUsuario, // Substitua 'nomeDoUsuario' pelo nome do usuário atual
        produtos: carrinho,
        data: new Date().toISOString(),
    };

    // Envie o objeto 'venda' para o serviço de tarefas (código a ser implementado)
    // Por exemplo: taskService.cadastrarVenda(venda);

    // Limpe o carrinho após finalizar a compra
    carrinho = [];

    alert("Compra realizada com sucesso!");
}
