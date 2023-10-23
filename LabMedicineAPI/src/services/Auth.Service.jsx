const AuthService = {
    isAdministrator: () => {
      const user = getUser();
      return user && user.tipo === 'administrador';
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
        const { user } = data;
  
        localStorage.setItem('user', JSON.stringify(user));
  
        return true;
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        return false;
      }
    },
    logout: () => {
      localStorage.removeItem('user');
    },
  };
  
  const getUser = () => {
    return JSON.parse(localStorage.getItem('user')) || {};
  };
  
  export default AuthService;
  