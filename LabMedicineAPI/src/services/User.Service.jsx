import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = "http://localhost:3000/users";

const Get = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

const Create = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "aplication/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  console.log(res && `Usuário ${data.email} criado com sucesso`);
};

const CreateUser = async (UserData) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(UserData),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(async (data) => {
      const res = await data.json();
      console.log(res);
      console.log("Cadastrado com Sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
};

const Show = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  return data;
};

const ShowByEmail = async (email) => {
  const filter = `?email=${email}`;
  const response = await fetch(`${API_URL}/${filter}`);
  const data = await response.json();

  return data[0];
};


const ShowByNome = async (nome) => {
  const filter = `?nome=${nome}`;
  const response = await fetch(`${API_URL}/${filter}`);
  const data = await response.json();
  
  return data;
}

const Delete = (id) => {
  LocalStorageService.set(
    "users",
    Get().filter((user) => user.id !== id)
  );
};

const DeleteUser = (id) => {
  LocalStorageService.set(
    "users",
    Get().filter((user) => user.id !== id)
  );
};

const Update = (id, newUser) => {
  const users = Get();
  users[users.find((user) => user.id === id).indexOf] = newUser;
  LocalStorageService.set("users", users);
};

export const UserService = {
  Get,
  Create,
  CreateUser,
  Show,
  ShowByEmail,
  ShowByNome,
  Delete,
  Update,
};
