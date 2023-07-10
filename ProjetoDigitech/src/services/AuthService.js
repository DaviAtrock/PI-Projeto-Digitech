import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../services/FirebaseConfig';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const auth = getAuth(app);
const TOKEN_STORAGE_KEY = 'authToken';

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

function generateAuthToken(userId) {
  const secretKey =
    'XTtOPxq9dI2S3RnITl6ANRZQhOoXkZtC4CBsi1UP1ELx5Qx3WFpeEMnMghrLBaU3l1DsFChWALJQBFL09zKfN0lu9Pn6mQIklNRgtIjvw4abREWVnvlCCYuwTAYp15vHvQCZo3Abpj2CE32W9m3nwgfEuAnrKRmhYhyGhhwGI97o92xBQQfRmLCpaJ9ZRPHLCc8zxSuLtjKzL4t9QgLO3kh9eXGfaMUeg53CsMrrtHIGCIreiw0UDpNoCw2a9WEE';
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '2d' });
  return token;
}

function setAuthToken(token) {
  const expirationDate = jwt_decode(token).exp * 1000;
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify({ token, expirationDate }));
}

function getAuthToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

function clearAuthToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export async function login(email, senha) {
  const storedToken = getAuthToken();
  if (storedToken) {
    const { token, expirationDate } = JSON.parse(storedToken);
    if (expirationDate > Date.now()) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      return userId;
    }
  }

  return signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const token = generateAuthToken(userCredential.user.uid);
      setAuthToken(token);
      return userCredential.user.uid;
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        throw new Error('Senha Inválida');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('Usuário não encontrado');
      }
    });
}

export async function logout() {
  clearAuthToken();
  await signOut(auth);
}

export async function refreshAuthToken() {
  const storedToken = getAuthToken();
  if (storedToken) {
    const { token, expirationDate } = JSON.parse(storedToken);
    if (expirationDate > Date.now()) {
      return token;
    } else {
      try {
        const userCredential = await auth.currentUser.getIdTokenResult();
        const refreshedToken = generateAuthToken(userCredential.user.uid);
        setAuthToken(refreshedToken);
        return refreshedToken;
      } catch (error) {
        console.error('Erro ao renovar o token:', error);
      }
    }
  }
}

export { criarUsuario };