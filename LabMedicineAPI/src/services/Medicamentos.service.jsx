import { LocalStorageService } from "./LocalStorage.Server";

const API_URL = 'http://localhost:7289/api/medicamentos';

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

const CreateMedicamento = async (medicamentoData) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(medicamentoData),
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
    });
    if (response.ok) {
        const data = await data.json();
        return data;
    }
    return []
}

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
        const updatedMedicamento = await response.json();
        return updatedMedicamento;
    }
    return null;
};
   
export const MedicamentoService = {
    Get,
    CreateMedicamento,
    Show,
    ShowByName,
    Delete,
    Update,
};
