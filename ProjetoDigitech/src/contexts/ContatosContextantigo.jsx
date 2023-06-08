import { useState, createContext } from 'react';

const ContatosContext = createContext();

const ContatosContextProvider = (props) => {
  const [contatos, setContatos] = useState([]);

  const incluir = (contato) => {
    setContatos(prevContatos => [...prevContatos, contato]);
  };

  const contexto = {
    meusContatos: contatos,
    incluirContato: incluir
  };

  return (
    <ContatosContext.Provider value={contexto}>
      {props.children}
    </ContatosContext.Provider>
  );
};

export default ContatosContext;
export { ContatosContextProvider };