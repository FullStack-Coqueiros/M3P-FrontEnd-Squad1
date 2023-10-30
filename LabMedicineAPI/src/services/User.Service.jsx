import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = "https://localhost:7289/api/usuarios";

const Get = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
  });
  if (response.ok) {
    return await response.json();
  }
  return [];
}

const CreateUser = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
  });
  if (response.ok) {
    const usuario = await response.json();
    return usuario;
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};

const Show = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    }
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};


const ShowByEmail = async (email) => {
  const filter = `?email=${email}`;
  const response = await fetch(`${API_URL}/${filter}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    }
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error(`HTTP error! status: ${response.status}`)
};


const ShowByNome = async (nome) => {
  const filter = `?nome=${nome}`;
  const response = await fetch(`${API_URL}/${filter}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    }
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};


const Delete = async (id) => {
  if (id === loggedUserId) {
    throw new Error("Você não pode excluir a si mesmo.");
  }
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  });
  if (response === 202) {
    return true;
  }
  else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};


const Update = async (id, newUser) => {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ ...newUser }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(newUser)
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};


export const UserService = {
  Get,
  CreateUser,
  Show,
  ShowByEmail,
  ShowByNome,
  Delete,
  Update,
};
