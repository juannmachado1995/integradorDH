import { createContext, useMemo, useState } from "react"; 
import pathIcoBtnAddUser from '../../images/ico-btn-add-user.png';
import pathIcoBtnGoLogginUser from '../../images/ico-btn-go-loggin-user.png';
import pathIcoHamburgerUser from '../../images/hamburg-user-icon.svg';
import pathLogoEmpresa from '../../images/e_bikernt_logo.png';

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
export const urlLogoEmpresa = pathLogoEmpresa;
export const pathIcons = {
  addUser: pathIcoBtnAddUser,
  goLogginUser: pathIcoBtnGoLogginUser,
  hamburgUser: pathIcoHamburgerUser
};