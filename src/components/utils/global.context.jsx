import { createContext, useMemo, useState } from "react"; 

export const initialState = {theme: "light"};
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => { 
  const [contexto, setContexto] = useState(initialState);
  const providerValue = useMemo(() => ({contexto, setContexto}), [contexto]);
  
  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

/*Global values*/ 
export const urlLogoEmpresa = './images/e_bikernt_logo.png';
export const pathIcons = {
  addUser: "./images/ico-btn-add-user.png",
  goLogginUser: "./images/ico-btn-go-loggin-user.png",
  hamburgUser: "./images/hamburg-user-icon.svg"
};