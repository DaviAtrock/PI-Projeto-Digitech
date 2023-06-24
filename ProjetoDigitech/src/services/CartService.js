import { urlApi } from './FirebaseConfig'

//GET Produtos
export async function listaProdutos() {
    let produtos = []
    await fetch(urlApi + "/produtos.json")
        .then((response) => response.json())
        .then((data) => {
            for (let key in data) {
                produtos.push({ key, ...data[key] })
            }
        })
        .catch((error) => {
            throw Error("Erro ao listar produto ", error.message)
        })

    return produtos
}

//GET ProdutosReservados
export async function listaProdutosReservados(userId) {
    try {
        const response = await fetch(urlApi + `produtosReservados.json?orderBy="userId"&equalTo="${userId}"`)
        const data = await response.json()
        const produtosReservados = []

        for (let key in data) {
            produtosReservados.push({ key, ...data[key] })
        }
        return produtosReservados
    } catch (error) {
        throw new Error("Erro ao listar produtos reservados ", error.message)
    }
}

//GET VerificaProdutosReservados
export async function verificarProdutosReservados(produtoId, userId) {
    try {
        const response = await fetch(urlApi + `livrosReservados.json?orderBy="userId"&equalTo="${userId}"`);
        const data = await response.json();
        const produtosReservados = Object.values(data);
        const produtoReservado = produtosReservados.find((produto) => produto.produtoId === produtoId);
        return !!produtoReservado;
    } catch (error) {
        throw new Error("Erro ao verificar Produto ", error.message);
    }
}


//POST produtosReservados
export async function reservarProduto(produtoId, userId) {
    const ProdutoReservado = {
        produtoId,
        userId,
    }
    try {
        await fetch(urlApi + "produtosReservados.json", {
            method: "POST",
            body: JSON.stringify(ProdutoReservado),
            headers: { "Context-Type": "application/json" },
        })
    } catch (error) {
        throw new Error("Erro ao reservar livro ", error.message)
    }
}