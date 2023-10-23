import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({
  auth: {
    user: {},
    isLogged: false,
  },
  setAuth: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: {}, isLogged: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
