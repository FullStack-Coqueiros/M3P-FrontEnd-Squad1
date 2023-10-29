import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:7289/api/consultas'



const Get = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  });
  if (response.ok) {
    const data = await response.json()
    return data;
  }
  return [];
}

const CreateConsulta = async (consultaData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(consultaData),
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.ok) {
    const consultaCriada = await response.json();
    return consultaCriada;
  }
  throw new Error('Falha na criação da Consulta');
};

const Show = async (id) => {
  const response = await fetch(url, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
  });

  if (response.ok) {
      const data = await response.json();
      return data;
  }
  return null;
};

const ShowByEmail = async (email) => {
  const filter = `?email=${email}`;
  const response = await fetch(`${API_URL}/${filter}`,{
    method: 'GET',
    headers:{
      "Content-Type":"application/json",
      "Authorization" : "Bearer "+localStorage.getItem("token")
      }
  });
  if(response.ok){
    const data = await response.json();
  }
  return [] ;
};

const DeleteConsulta =  async (id) => {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url , {
      method: 'DELETE',
      headers:{
          "Content-Type":"application/json",
          "Authorization" : "Bearer "+localStorage.getItem('token')
      }
  });
  if(response.status ===202){
      return true;
  }
  return false;
}

const Update = async (id, updatedData) => {
  const response = await fetch(url, {
      method: "PUT", // Use PUT para atualizar recursos
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(updatedData) // Os novos dados a serem enviados
    });
  if(response.ok){
      const updatedConsulta = await response.json();
      return updatedConsulta;
  }
  return null;
};



export const ConsultaService = {
  Get,
  CreateConsulta,
  Show,
  ShowByEmail,
  DeleteConsulta,
  Update
}