import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import axios from 'axios';

async function criarUsuario(nome, email, senha) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${"AIzaSyBFjdL1yjYNRKDUk8qzhefM0ZDuBnYTmI8"}`;

  try {
    const response = await axios.post(url, {
      displayName: nome,
      email: email,
      password: senha,
      returnSecureToken: true
    });

    // Mensagem de sucesso
    console.log('Usuário criado com sucesso!');

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const errorCode = error.response.data.error.code;
      switch (errorCode) {
        case 'EMAIL_EXISTS':
          throw new Error('O endereço de e-mail já está em uso.');
        case 'INVALID_EMAIL':
          throw new Error('O endereço de e-mail é inválido.');
        case 'WEAK_PASSWORD':
          throw new Error('A senha é muito fraca. Use uma senha mais forte.');
        // Adicione mais casos de erro conforme necessário
        default:
          throw new Error('Ocorreu um erro ao criar o usuário. Por favor, tente novamente mais tarde.');
      }
    } else {
      throw new Error('Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.');
    }
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyBFjdL1yjYNRKDUk8qzhefM0ZDuBnYTmI8",
  authDomain: "projetodigitech-a4a48.firebaseapp.com",
  projectId: "projetodigitech-a4a48",
  storageBucket: "projetodigitech-a4a48.appspot.com",
  messagingSenderId: "490045018326",
  appId: "1:490045018326:web:bd7a20477d501d056d3977",
  databaseURL: "https://projetodigitech-a4a48-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);


const urlApi = "https://projetodigitech-a4a48-default-rtdb.firebaseio.com/"



export { criarUsuario, app, urlApi, database };
export default firebaseConfig;