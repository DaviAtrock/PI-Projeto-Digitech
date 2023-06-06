import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import ContatosContext from '../contexts/ContatosContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Cadastro.css';

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { incluirContato } = useContext(ContatosContext);
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

  function onSubmit(data) {
    incluirContato(data);
    navigate('/');
  }

  function handleInputFocus(inputName) {
    setFocusedInput(inputName);
  }

  function handleInputBlur() {
    setFocusedInput(null);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Cadastre-se</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              className={`form-control ${focusedInput === 'nome' ? 'focused' : ''}`}
              {...register('nome', { required: 'Campo obrigatório' })}
              onMouseEnter={() => handleInputFocus('nome')}
              onMouseLeave={handleInputBlur}
            />
            {errors.nome && <p className="error">{errors.nome.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className={`form-control ${focusedInput === 'email' ? 'focused' : ''}`}
              {...register('email', { required: 'Campo obrigatório' })}
              onMouseEnter={() => handleInputFocus('email')}
              onMouseLeave={handleInputBlur}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              className={`form-control ${focusedInput === 'senha' ? 'focused' : ''}`}
              {...register('senha', {
                required: 'Campo obrigatório',
                minLength: { value: 4, message: 'A senha deve ter no mínimo 4 caracteres' },
              })}
              onMouseEnter={() => handleInputFocus('senha')}
              onMouseLeave={handleInputBlur}
            />
            {errors.senha && <p className="error">{errors.senha.message}</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="btn-submit">Enviar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
