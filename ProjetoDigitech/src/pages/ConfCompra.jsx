import { useContext, useEffect } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './ConfCompra.css';

export default function ConfCompra() {

    return (
        <>
            <Navbar />
            <main>
                <div className='sucesso'>
                    <h1>Compra realizada com sucesso.</h1>
                    <Link to="/">Clique aqui para voltar as compras.</Link>
                </div>
            </main>
            <Footer />
        </>
    );
}

