import { useState } from 'react';
import React from 'react';
import './Perfil.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProfilePage = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const produtos = [
        { id: 1, nome: 'Item 1', preco: 10 },
        { id: 2, nome: 'Item 2', preco: 20 },
        { id: 3, nome: 'Item 3', preco: 15 },
    ];

    const handleAddProduct = (product) => {
        setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    };

    const handleRemoveProduct = (productId) => {
        setSelectedProducts((prevSelectedProducts) =>
            prevSelectedProducts.filter((product) => product.id !== productId)
        );
    };

    const renderSelectedProducts = () => {
        if (selectedProducts.length === 0) {
            return <p>Nenhum produto selecionado.</p>;
        }

        return (
            <ul>
                {selectedProducts.map((product) => (
                    <li key={product.id}>
                        {product.nome} - Preço: R${product.preco}{' '}
                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <Navbar />
            <div>
                <h2>Perfil do Usuário</h2>

                <h3>Resumo do Pedido</h3>
                {renderSelectedProducts()}

                <h3>Produtos Disponíveis</h3>
                <ul>
                    {produtos.map((product) => (
                        <li key={product.id}>
                            {product.nome} - Preço: R${product.preco}{' '}
                            <button onClick={() => handleAddProduct(product)}>Adicionar</button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
