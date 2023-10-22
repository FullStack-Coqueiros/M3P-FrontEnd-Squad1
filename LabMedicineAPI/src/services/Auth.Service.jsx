const AuthService = {
    isAuthenticated: () => {
      const token = localStorage.getItem('token');
      return token && !isTokenExpired(token);
    },
    isAdministrator: () => {
      const user = getUser();
      return user && user.roles && user.roles.includes('Administrador');
    },
    login: async (username, password) => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (!response.ok) {
          console.error('Erro ao fazer Login:', response.statusText);
          return false;
        }
  
        const data = await response.json();
        const { token, user } = data;
  
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
  
        return true;
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false;
      }
    },
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  };
  
  const isTokenExpired = (token) => {
    const decodedToken = decodeToken(token);
  
    if (!decodedToken || !decodedToken.exp) {
      return true;
    }
  
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };
  
  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  };
  
  const getUser = () => {
    return JSON.parse(localStorage.getItem('user')) || {};
  };
  
  export default AuthService;
  