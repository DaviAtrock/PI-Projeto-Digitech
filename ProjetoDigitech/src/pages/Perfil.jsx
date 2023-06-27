import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Perfil.css';

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1234,
      status: 'Concluído',
      total: 100.0
    },
    {
      id: 5678,
      status: 'Em andamento',
      total: 50.0
    }
  ]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado, você pode acessar as informações do usuário aqui
        setUser(user);
      } else {
        // O usuário não está autenticado, redirecione para a página de login
        navigate('/login');
      }
    });

    return () => {
      // Remova o observador do estado de autenticação ao desmontar o componente
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      // Redirecionar para a página de login após o logout
      navigate('/login');
    } catch (error) {
      console.log('Erro ao realizar logout:', error);
    }
  };

  if (!user) {
    return (
      <div>
        <Navbar />
        <p>Usuário não autenticado. Redirecionando para a página de login...</p>
        {/* Não é necessário adicionar a lógica de redirecionamento aqui */}
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Davi Machado Atrock</span>
              <span className="text-black-50">daviatrock@gmail.com</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Informações do Perfil</h4>
              </div>
              <div className="row mt-2">

                <div className="col-md-6">
                  <label className="labels">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="primero nome..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-6">
                  <label className="labels">Sobrenome</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="sobrenome..."
                  />
                </div>

              </div>
              <div className="row mt-3">

                <div className="col-md-12">
                  <label className="labels">Celular</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="numero do tel celular..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="digite o endereço..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Endereço linha 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="endereço linha 2..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">CEP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="digite seu CEP"
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Estado</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="digite o Estado..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Bairro</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="digite o Bairro..."
                    defaultValue=""
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="digite o email..."
                    defaultValue=""
                  />
                </div>

              </div>

              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button">
                  Salvar Perfil
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <span>Mais Informações</span>
                <span className="border px-3 p-1 add-experience">
                  <i className="fa fa-plus" />
                  &nbsp;Experiência
                </span>
              </div>
              <br />

              <br />
              <div className="col-md-12">
                <label className="labels">Informações Adicionais</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="opcional..."
                  defaultValue=""
                />
              </div>
              <br />

              <aside>
                <div className="box">
                  <header className="header-resumo">Histórico de Compras</header>
                  <div className="info">
                    <div>
                      <span>DG145287</span>
                    </div>
                    <div>
                      <span>DG145287</span>
                    </div>
                    <div>
                      <span>DG145287</span>
                    </div>
                    <div>
                      <span>DG145287</span>
                    </div>
                  </div>
                </div>
                <button to="" className="historico-compra" id="btn-historico">Ver Todo Histórico</button>
              </aside>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


export default ProfilePage;