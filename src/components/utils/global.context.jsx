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
export const urlLogoEmpresa = '/src/assets/e_bikernt_logo.png';
export const pathIcons = {
  addUser: "/src/assets/ico-btn-add-user.png",
  goLogginUser: "src/assets/ico-btn-go-loggin-user.png",
  hamburgUser: "/src/assets/hamburg-user-icon.svg"
};