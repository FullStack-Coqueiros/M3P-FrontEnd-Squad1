import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'https://localhost:7289/api/dietas';

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

const CreateDieta = async (dietaData) => {
   const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(dietaData),
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
    });
    if(response.ok){
        const dietaData = await response.json();
        return dietaData;
    }
    throw new Error('Não foi possivel criar a dieta');
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
const ShowByName = async (nome) => {
    const filter = `${API_URL}?name=${encodeURIComponent(nome)}`;
    const response = await fetch(filter, {
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
    return null
};
const Delete =  async (id) => {
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
        const updatedDieta = await response.json();
        return updatedDieta;
    }
    return null;
};

export const DietaService = {
    Get,
    CreateDieta,
    Show,
    ShowByName,
    Delete,
    Update,
};