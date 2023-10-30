import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'https://localhost:7289/api/exames'



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


const CreateExame = async (exameData) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(exameData),
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
  });
  if (response.ok) {
    const data = await data.json();
    return data;
  }
  return []
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
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
      }
  });
  if(response.ok){
    const data = await response.json();
    return data;
  }
  return [];
};

const DeleteExame =  async (id) => {
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
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(updatedData)
    });
  if(response.ok){
      const updatedExame = await response.json();
      return updatedExame;
  }
  return null;
};



export const ExameService = {
  Get,
  CreateExame,
  Show,
  ShowByEmail,
  DeleteExame,
  Update
}