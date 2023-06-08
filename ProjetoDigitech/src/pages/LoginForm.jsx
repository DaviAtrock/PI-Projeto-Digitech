import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import './LoginForm.css'

export default function LoginForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { handleLogin } = useContext(UserContext)
  const [errorLogin, setErrorLogin] = useState("")

  const validaEmail = {
    required: {
      value: true,
      message: 'Email é obrigatorio',
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email inválido',
    }
  }

  const validaSenha = {
    required: {
      value: true,
      message: 'Senha é obrigatoria',
    },
    minLength: {
      value: 6,
      message: 'Senha deve ter no mínimo 6 caracteres',
    }
  }

  async function onSubmit(data) {
    const { email, senha } = data;
    setErrorLogin("")
    try {
      await handleLogin(email, senha)
      navigate("/")
    } catch (error) {
      setErrorLogin(error.message)
    }

  }

  return (
    <div className="main-container">
      <div className="box-container">
        <h2 className="titulo-login">Login</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {errorLogin && <p className="erro">{errorLogin}</p>}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", validaEmail)} className="rounded-input" />
            {errors.email && <p className="erro">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" {...register("senha", validaSenha)} className="rounded-input" />
            {errors.senha && <p className="erro">{errors.senha.message}</p>}
          </div>
          <button className="btn-submit login mt-2">Entrar</button>
          <button type="button" onClick={() => navigate('/Cadastro')} className="btn-submit login mt-2">Cadastrar-se</button>
        </form>
      </div>
    </div>
  )
}