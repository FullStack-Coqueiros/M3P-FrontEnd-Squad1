const AuthService = {
    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return token && !isTokenExpired(token);
    },
    isAdministrator: () => {
        const userRoles = getUserRoles();
        return userRoles.includes('Administrador');
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
            const { token, userRoles } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('userRoles', JSON.stringify(userRoles));

            return true;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return false;
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRoles');
    },
};

const isTokenExpird = (token) => {
    const decodedToken = decodeToken(token);

    if(!decodedToken || !decodedToken.exp) {
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

const getUserRoles = () => {
    return JSON.parse(localStorage.getItem('userRoles')) || [];
};

export default AuthService;