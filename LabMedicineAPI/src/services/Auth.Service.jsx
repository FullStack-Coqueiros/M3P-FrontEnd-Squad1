import { useAuth } from "../context/AuthContext";

const AuthService = {
  isAdministrator: (auth) => {
    //const { auth } = useAuth();
    const { user } = auth;
    console.log('User:', user);
    return user && user.tipo === "administrador";
  },
  login: async (username, password) => {
    //const { setAuth } = useAuth();

    try {
      const response = await fetch("http://localhost:7289/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        console.error("Erro ao fazer Login:", response.statusText);
        return false;
      }

      const data = await response.json();
      const { user, token } = data;

     localStorage.setItem("token",token);
     return user;

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  },
  logout: (setAuth) => {
    //const { setAuth } = useAuth();
    setAuth({ user: {}, isLogged: false });
    localStorage.removeItem("user");
  },
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || {};
};

export default AuthService;
