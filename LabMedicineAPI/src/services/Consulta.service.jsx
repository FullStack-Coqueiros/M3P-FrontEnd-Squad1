import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:3000/consultas'



const Get = async () => {
   /*  return localStorage.getItem('users')  ? JSON.parse(localStorage.getItem('users')) : null */
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
   }

const Create = async(data) => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res && `Usuario ${data.email} criado com sucesso`);
}

const CreateConsulta = async(consultaData) => {
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(consultaData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(async (data) => {
         const res = await data.json();
          console.log(res);
          console.log("Consulta cadastrada com sucesso");
        })
        .catch((err) => {
          console.log(err);
        });
  
}

const Show = async (id) => {

const response = await fetch(`${API_URL}/${id}`);
const data = await response.json();
 
return data;
}

const ShowByEmail = async (email) => {
    const filter = `?email=${email}`;
    const response = await fetch(`${API_URL}/${filter}`);
    const data = await response.json();
    
    return data[0];
}

const ShowByNome = async (nomeCompleto) => {
  const filter = `?nomeCompleto=${nomeCompleto}`;
  const response = await fetch(`${API_URL}/${filter}`);
  const data = await response.json();
  
  return data;
}

const Delete = (id) => {
    LocalStorageService.set('users', Get().filter( user => user.id !== id));
}

const DeleteConsulta = (id) => {
    LocalStorageService.set('consultas', Get().filter( consultas => consultas.id !== id));
}


const Update = (id, newUser) => {
    const users = Get();
    users[users.find(user => user.ide === id).indexOf] = newUser;
    LocalStorageService.set('users', users)
}



export const ConsultaService = {
    Get,
    Create,
    CreateConsulta,
    Show,
    ShowByEmail,
    ShowByNome,
    Delete,
    DeleteConsulta,
    Update
}