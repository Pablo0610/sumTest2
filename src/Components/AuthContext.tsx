import { createContext, PropsWithChildren, useContext, useState } from "react";

enum stateTest {
    'checking',
    'login',
    'close',
    'authenticate' 
  }
  interface Authstate {
    state: stateTest;
    loginWithpasword: (email:string, password:string) => void
    logout:() => void
  };

export const AuthContext = createContext({} as Authstate);
// Crea el contexto con el tipo especificado
/* export const AuthContext = createContext<Authstate | undefined>(undefined);
//hook persdonalizado para usae el contextoi */
export const useAuthContext = () => useContext(AuthContext)

//provedor del contexto
export const AuthProvider = ({ children }: PropsWithChildren ) => {
    const [state,setState] = useState(stateTest.checking);
    const loginWithpasword =  (email: string, password: string)  =>{
      setState(stateTest.login)
    }
    const logout = () => {
      setState(stateTest.close); // Aquí asumimos que `stateTest.logout` es el estado correspondiente al cierre de sesión
  };

    return (
        <AuthContext.Provider value = {{
            state: state,
            loginWithpasword,
            logout
            
            }}>
            {children}

        </AuthContext.Provider>

    );

};