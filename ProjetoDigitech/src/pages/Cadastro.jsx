import { useState } from 'react';
import { criarUsuario } from '../services/AuthService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Cadastro.css';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    
    setError('');
    setSuccessMessage('');

    criarUsuario(nome, email, senha)
      .then(() => {
        setSuccessMessage('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container-cadastro">
        <h1>Cadastre-se</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)}required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" value={email}onChange={(event) => setEmail(event.target.value)}required/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" className="form-control" value={senha}onChange={(event) => setSenha(event.target.value)}required/>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <button type="submit" className="btn-submit mt-5">Enviar</button>
          </div>
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}
