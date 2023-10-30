import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'https://localhost:7289/api/pacientes'

const Get = async () => {
    /*  return localStorage.getItem('users')  ? JSON.parse(localStorage.getItem('users')) : null */
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    return [];
}

const GetCEPData = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error("CEP não encontrado");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao obter dados do CEP");
    }
};

const CreatePaciente = async (pacienteData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(pacienteData),
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    return []
}


const Show = async (id) => {

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
        }
    });
    if (response.ok) {
        const data = await response.json()
        return data
    }
    return [];
}


const ShowByEmail = async (email) => {
    const url = `${API_URL}?email=${encodeURIComponent(email)}`;
    const response = await fetch(`${API_URL}/${url}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
        }
    });
    if (response.ok) {
        const data = await response.json()
        return data
    }
    return [];
};


const ShowByNome = async (nome) => {
    const filter = `${API_URL}?email=${encodeURIComponent(nome)}`;
    const response = await fetch(`${API_URL}/${filter}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
        }
    });
    if (response.ok) {
        const data = await response.json()
        return data
    }
    return [];
}

const Delete = async (id) => {
    const url = `${API_URL}/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    });
    if (response.status === 202) {
        return true;
    }
    throw new Error(`Erro ao excluir paciente: ${response.statusText}`);
}

const Update = async (id, newUser) => {
    const url = `${API_URL}/${id}`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ ...newUser }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(newUser)
    });
    if (response.status === 200) {
        return true;
    }
    throw new Error(`Erro a atualizar o usuario: ${response.statusText}`);
};



export const PacienteService = {
    Get,
    GetCEPData,
    CreatePaciente,
    Show,
    ShowByEmail,
    ShowByNome,
    Delete,
    Update
}