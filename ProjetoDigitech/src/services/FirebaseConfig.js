import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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



export { app, urlApi, database };
export default firebaseConfig;